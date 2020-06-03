import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute, Navigation } from '@angular/router';
import { ArbolesServicesProvider } from '../../providers/arboles-service/arboles-service';
import { AutenticacionService } from '../services/autenticacion.service';
import { InfoUsuarioHomeServicesProvider } from '../../providers/info-usuario-home-service/info-usuario-home-service';

@Component({
  selector: 'app-arbs',
  templateUrl: './arbs.page.html',
  styleUrls: ['./arbs.page.scss'],
})
export class ArbsPage implements OnInit {
  arboles = []
  usuario= {}

  constructor(private route: ActivatedRoute, public router: Router, public ArbolesServicesProvider:ArbolesServicesProvider,private infoUsuarioHomeServicesProvider: InfoUsuarioHomeServicesProvider,private autenticacionService: AutenticacionService, public alertController: AlertController) {
    this.traerArboles();
    this.route.queryParams.subscribe(params => {
      this.usuario['documento'] = this.autenticacionService.document_;
      this.traerInformacionUsuario();
      console.log(this.usuario);
    });
   }

  ngOnInit() {
  }

  traerArboles() {
    this.ArbolesServicesProvider.traerarboles().subscribe(
      (data) => {
        if(data['tipo'] == 'error_interno') {
          this.mostrarAlerta('Error en el servidor', data['mensaje']);
        } else if(data['tipo'] == "aprobado") {
          this.arboles = data['mensaje'];
          console.log(this.arboles[0]["nombre_usuario"]);
        } else {
          this.mostrarAlerta('Mensaje malformado', 'El paquete no se logro enviar bien.')
        }
      }, (error) => {
        this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
      }
    );
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

  async mostrarAlerta(titulo, mensaje) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

}
