import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras, Navigation } from '@angular/router';
import { ConsultaApiRutasServicesProvider } from '../../providers/consulta-api-rutas-service/consulta-api-rutas-service';

@Component({
  selector: 'app-info-rutas',
  templateUrl: './info-rutas.page.html',
  styleUrls: ['./info-rutas.page.scss'],
})
export class InfoRutasPage implements OnInit {

  rutas = [];
  inicio: any = {
    lat: 0,
    lng: 0
  };
  destino: any = {
    lat: 0,
    lng: 0
  };

  constructor(public router: Router, public consultaApiRutasProvider: ConsultaApiRutasServicesProvider, public alertController: AlertController ) {
    this.mostrarRuta();
  }

  ngOnInit() {
  }

  async mostrarAlerta(titulo, mensaje) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

  mostrarRuta(){
    this.consultaApiRutasProvider.obtenerRutas().subscribe(
      (data) => {
        this.rutas = data["mensaje"];

        //console.log(data);
      }, (error) => {
        this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
      }
    );
  }

  imprimirPunto(ruta:{}){
    this.inicio.lat = ruta["Path"][0][1];
    this.inicio.lng = ruta["Path"][0][0];
    this.destino.lat = ruta["Path"][(ruta["Path"].length)-1][1];
    this.destino.lng = ruta["Path"][(ruta["Path"].length)-1][0];
    let navigationExtras: NavigationExtras = {
      state: {
        start: this.inicio,
        destination: this.destino
      }
    };
    console.log(this.inicio);
    console.log(this.destino);
    this.router.navigate(['ciclo-rutas'], navigationExtras);
  }


}
