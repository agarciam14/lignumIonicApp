import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AdministradorDatosUsuarioServicesProvider } from '../../../providers/administrador-datos-usuario-service/administrador-datos-usuario-service';
import { ActivatedRoute, Router } from '@angular/router';

import { CambiarContrasenaPage } from '../../usuario/cambiar-contrasena/cambiar-contrasena.page';
import { ImagenModalPage } from '../../usuario/imagen-modal/imagen-modal.page';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.page.html',
  styleUrls: ['./datos-usuario.page.scss'],
})
export class DatosUsuarioPage implements OnInit {

  usuario = {
    'nombre_usuario': '',
    'documento': '',
    'correo': '',
    'tipo': '',
    'imagen': ''
  }

  constructor(private route: ActivatedRoute, private router: Router, private administradorDatosUsuarioServicesProvider: AdministradorDatosUsuarioServicesProvider, public alertController: AlertController, private modalController: ModalController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario['documento'] = this.router.getCurrentNavigation().extras.state.documento;
        this.traerInformacionUsuario();
      }
    });
  }

  ngOnInit() {
  }

  traerInformacionUsuario() {
    this.administradorDatosUsuarioServicesProvider.traerInformacionUsuario(this.usuario['documento']).subscribe(
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
      this.administradorDatosUsuarioServicesProvider.modificarUsuario(this.usuario).subscribe(
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

  async modificarImagenModal() {
    const modal = await this.modalController.create({
      component: ImagenModalPage,
      componentProps: {
        nombre_usuario: this.usuario['nombre_usuario'],
        imagen: this.usuario['imagen']
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    this.usuario['imagen'] = data['imagen'];
    console.log(this.usuario)
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

  eliminarUsuario() {
    this.administradorDatosUsuarioServicesProvider.eliminarUsuario(this.usuario).subscribe(
      (data) => {
        if(data['tipo'] == 'error_interno') {
          this.mostrarAlerta('Error en el servidor', data['mensaje']);
        } else if(data['tipo'] == 'error_documento') { 
          this.mostrarAlerta('Error en el documento', data['mensaje']);
        } else if(data['tipo'] == "aprobado") {
          this.mostrarAlerta(data['tipo'], data['mensaje']);
          this.limpiar();
        } else {
          this.mostrarAlerta('Mensaje malformado', 'El paquete no se logro enviar bien.')
        }
      }, (error) => {
        this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
      }
    );
  }

  volver() {
    this.router.navigate(['lista-usuarios']);
  }

  async mostrarAlerta(titulo, mensaje) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

  async confirmacionEliminar() {
    const alert = await this.alertController.create({
      header: 'Eliminar usuario',
      message: '¿Está seguro que desea eliminar al usuario?\n' + this.usuario['nombre_usuario'],
      buttons: [
        {
          text: 'CONFIRMAR',
          role: 'confirmar',
          handler: (accion) => {
            this.eliminarUsuario();
          }
        }, {
          text: 'CANCELAR',
          role: 'cancelar',
        }
      ]
    });

    await alert.present();
  }

  limpiar() {
    this.usuario = {
      'nombre_usuario': '',
      'documento': '',
      'correo': '',
      'tipo': '',
      'imagen': ''
    }
  }

}
