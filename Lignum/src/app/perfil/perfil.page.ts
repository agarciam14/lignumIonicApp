import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoUsuarioPerfilServicesProvider } from '../../providers/info-usuario-perfil-service/info-usuario-perfil-service';
import { AutenticacionService } from '../services/autenticacion.service';

import { CambiarContrasenaPage } from '../cambiar-contrasena/cambiar-contrasena.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario = {
    'nombre_usuario': '',
    'documento': '',
    'correo': '',
    'tipo': '',
    'imagen': ''
  }

  constructor(private autenticacionService: AutenticacionService, private infoUsuarioPerfilServicesProvider: InfoUsuarioPerfilServicesProvider, private route: ActivatedRoute, private router: Router, public alertController: AlertController, private modalController: ModalController) {
    this.route.queryParams.subscribe(params => {
      this.usuario['documento'] = this.autenticacionService.document_;

      this.traerInformacionUsuario();
    });
  }

  ngOnInit() {
  }

  traerInformacionUsuario() {
    this.infoUsuarioPerfilServicesProvider.traerInformacionUsuario(this.usuario['documento']).subscribe(
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

  modificarUsuario() {
    if (this.validarCamposVacios()) {
      this.mostrarAlerta('Campos vacios', 'Los campos usuario, documento, correo, imágen y tipo de usuario no deben de estar vacios.')
    } else {
      this.infoUsuarioPerfilServicesProvider.modificarUsuario(this.usuario).subscribe(
        (data) => {
          if (data["tipo"] == "error_documento") {
            this.mostrarAlerta('Correo o documento invalido', data['mensaje']);
          } else if (data["tipo"] == "error_correo") {
            this.mostrarAlerta('Correo existente', data['mensaje']);
          } else if (data["tipo"] == "error_nombre_usuario") {
            this.mostrarAlerta('Usuario existente', data['mensaje']);
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
    }
  }

  validarCamposVacios() {
    if (this.usuario['nombre_usuario'] == "" || this.usuario['documento'] == "" || this.usuario['correo'] == "" || this.usuario['imagen'] == "") {
      return true;
    } else {
      return false;
    }
  }

  modificarImagenModal() {

  }

  async cambiarContrasenaModal() {
    const modal = await this.modalController.create({
      component: CambiarContrasenaPage,
      componentProps: {
        nombre_usuario: this.usuario['nombre_usuario'],
        documento: this.usuario['documento']
      }
    });

    await modal.present();
  }

  cerrarSesion() {
    this.autenticacionService.logout();
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
