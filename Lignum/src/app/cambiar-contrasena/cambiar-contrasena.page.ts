import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { InfoUsuarioPerfilServicesProvider } from '../../providers/info-usuario-perfil-service/info-usuario-perfil-service';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {

  @Input() nombre_usuario;
  @Input() documento;

  usuario = {
    'usuario': this.nombre_usuario,
    'documento': this.documento,
    'contrasena': '',
    'confirmar_contrasena': ''
  }

  constructor(private alertController: AlertController, private modalController: ModalController, private infoUsuarioPerfilServicesProvider: InfoUsuarioPerfilServicesProvider) { }

  ngOnInit() {
  }

  cambiarContrasena() {
    if(this.validar_campos()) {
      if(this.validar_contrasena_igual()) {
        this.infoUsuarioPerfilServicesProvider.modificarContrasena(this.usuario['documento'], this.usuario['confirmar_contrasena']).subscribe(
          (data) => {
            if (data["tipo"] == "error_documento") {
              this.mostrarAlerta('Correo o documento invalido', data['mensaje']);
            } else if (data["tipo"] == "error_contrasena") {
              this.mostrarAlerta('Contraseña insegura', data['mensaje']);
            } else if (data["tipo"] == "error_interno") {
              this.mostrarAlerta('Error interno', data['mensaje']);
            } else if (data["tipo"] == "aprobado") {
              this.mostrarAlerta('Aprobado', data['mensaje']);
            }
          }, (error)=> {
            this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
          }
        );
      }
    }
  }

  validar_campos() {
    if (this.usuario['contrasena'] == "" || this.usuario['confirmar_contrasena']) {
      return true;
    } else {
      return false;
    }
  }
  
  validar_contrasena_igual() {
    if (this.usuario['contrasena'] != this.usuario['confirmar_contrasena']) {
      return true;
    } else {
      return false;
    }
  }

  volver() {
    this.modalController.dismiss();
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
