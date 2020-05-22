import { Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ActivatedRoute,Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { InfoUsuarioHomeServicesProvider } from '../../providers/info-usuario-home-service/info-usuario-home-service';

declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage {
  @ViewChild('mapElement', {static:false}) mapElement: ElementRef;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  icon = {
    url: 'assets/icon/user.png',
    scaledSize: new google.maps.Size(40, 40),
  };
  marker=new google.maps.Marker({icon: this.icon});
  directionForm: FormGroup;
  logs: any[] = [];
  distance: Number;
  currentLocation: any = {
    'lat': 0,
    'lng': 0
  };
  usuario= {
    'nombre_usuario': '',
    'documento': '',
    'puntaje': 0,
    'recorrido': 0,
  }
  options = {
    enableHighAccuracy: true,
    timeout: 30000,
    maximumAge: 7000,
  };

  subscription : any;

  constructor(public alertController: AlertController, private autenticacionService: AutenticacionService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private geolocation: Geolocation, private infoUsuarioHomeServicesProvider: InfoUsuarioHomeServicesProvider) {
    this.createDirectionForm();
    this.route.queryParams.subscribe(params => {
      this.usuario['documento'] = this.autenticacionService.document_;
      this.traerInformacionUsuario();
    });
  }

  ionViewWillEnter(): void {
    this.logs=[];
    let map_options= {
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      streetViewControl: false,
      disableDefaultUI: true
    }
    const map = new google.maps.Map(this.mapElement.nativeElement, map_options);

    this.subscription = this.geolocation.watchPosition(this.options).subscribe(resultado => {
      this.currentLocation.lat = resultado.coords.latitude;
      this.currentLocation.lng = resultado.coords.longitude;
      this.logs.push({'lat': resultado.coords.latitude, 'long': resultado.coords.longitude});
      if (this.directionForm.value['destination']!=''){
        this.calculateAndDisplayRoute(this.directionForm.value);
      }
    });
    
    this.geolocation.getCurrentPosition(this.options).then((resp) => {
      this.currentLocation.lat = resp.coords.latitude;
      this.currentLocation.lng = resp.coords.longitude;
      map.setCenter(this.currentLocation);
      this.marker.setMap(map);
      this.marker.setPosition(this.currentLocation);

    }).catch((error) => {
      this.mostrarAlerta('Error encontrando la ubicación',error);
    });

    this.directionsDisplay.setMap(map);

  }

  ionViewDidLeave(): void {
    let distancia= this.usuario['recorrido'];
    this.subscription.unsubscribe();
    this.modificarRecorrido();
  }

  traerInformacionUsuario() {
    this.infoUsuarioHomeServicesProvider.traerInformacionUsuario(this.usuario['documento']).subscribe(
      (data) => {
        if(data['tipo'] == 'error_interno') {
          this.mostrarAlerta('Error en el servidor', data['mensaje']);
        } else if(data['tipo'] == 'error_documento') { 
          this.mostrarAlerta('Error en el documento', data['mensaje']);
        } else if(data['tipo'] == "aprobado") {
          this.usuario = data['mensaje'];
        } else {
          this.mostrarAlerta('Mensaje malformado', 'El paquete no se logro enviar bien.')
        }
      }, (error) => {
        this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
      }
    );
  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      destination: ['', Validators.required]
    });
  }

  modificarRecorrido(): void{
    if(this.logs.length>1){
      this.infoUsuarioHomeServicesProvider.modificarRecorrido(this.usuario, this.logs).subscribe(
        (data) => {
          if (data["tipo"] == "error_documento") {
            this.mostrarAlerta('Documento invalido', data['mensaje']);
          } else if (data["tipo"] == "error_interno") {
            this.mostrarAlerta('Error interno', data['mensaje']);
          } else if (data["tipo"] == "aprobado") {
            this.mostrarAlerta('Aprobado', data['mensaje']);
          }
        }, 
        (error) => {
          this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
        }
      );
    } else {
      this.mostrarAlerta('Recorrido no actualizado','La distancia recorrida no fue suficiente');
    }
  }

  calculateAndDisplayRoute(formValues) {
    const that = this;
    this.marker.setPosition(this.currentLocation);
    this.directionsService.route({
      origin: this.currentLocation,
      destination: formValues.destination,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        that.directionsDisplay.setDirections(response);
        
        that.directionsDisplay.setOptions( {polylineOptions: {
            strokeWeight: 5,
            strokeColor:  "#28a745" 
          }, suppressMarkers: true } );
      } else {
        this.mostrarAlerta('No se pudo mostrar la ruta', status);
      }
    });
  }

  async mostrarAlerta(titulo, mensaje) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

}
