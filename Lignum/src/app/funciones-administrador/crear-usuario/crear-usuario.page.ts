import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AdministradorCrearUsuarioServicesProvider } from '../../../providers/administrador-crear-usuario-service/administrador-crear-usuario-service';
import { Router } from '@angular/router';

import { ImagenModalPage } from '../../usuario/imagen-modal/imagen-modal.page';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  usuario = {
    nombre_usuario: "",
    documento: "",
    correo: "",
    imagen: "",
    contrasena: "",
    confirmar_contrasena: "",
    tipo: ""
  }

  constructor(private router: Router, public administradorCrearUsuarioServicesProvider: AdministradorCrearUsuarioServicesProvider, public alertController: AlertController, private modalController: ModalController) { }

  ngOnInit() {
  }

  crearUsuario() {
    if (this.validarCamposVacios()) {
      this.mostrarAlerta('Campos vacios', 'Los campos usuario, documento, correo, imágen y tipo de usuario no deben de estar vacios.')
    } else if (this.validarContrasenaIgual()) { 
      this.mostrarAlerta('Contraseña', 'Las contraseñas no coinciden')
    } else {
      this.administradorCrearUsuarioServicesProvider.crearUsiario(this.usuario).subscribe(
        (data) => {
          if (data["tipo"] == "error_correo_documento") {
            this.mostrarAlerta('Correo o documento invalido', data['mensaje']);
          } else if (data["tipo"] == "error_nombre_usuario") {
            this.mostrarAlerta('Usuario existente', data['mensaje']);
          } else if (data["tipo"] == "error_contrasena") {
            this.mostrarAlerta('Contraseña insegura', data['mensaje']);
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

  validarContrasenaIgual() {
    if (this.usuario['contrasena'] != this.usuario['confirmar_contrasena']) {
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
  
}
