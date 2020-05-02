import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginServicesProvider } from '../../../providers/login-service/login-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    'usuario': "",
    'contrasena': ""
  };

  constructor(private loginServicesProvider: LoginServicesProvider, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  ingreso_sistema() {
    if (this.usuario['usuario'] == "" || this.usuario['contrasena'] == "") {
      this.mostrarAlerta('Campos vacios', 'Los campos usuario y contraseña no deben de estar vacios.')
    } else {
      this.loginServicesProvider.autenticarUsuario(this.usuario).subscribe(
        (data) => {
          if (data["tipo"] == "credenciales_erroneas") {
            this.mostrarAlerta('Error ingreso', data['mensaje']);
          } else if (data["tipo"] == "error_interno") {
            this.mostrarAlerta('Error interno', data['mensaje']);
          } else if (data["tipo"] == "aprobado") {
            this.router.navigate(['']);
          }
        }, 
        (error) => {
          this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
        }
      );
    }
  }

  registrarNuevo() {
    this.router.navigate(['registro-usuario-nuevo']);
  }

  olvidoContrasena() {
    //this.router.navigate(['recuperar-contrasena']);
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
