import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdministradorCrearCicloviaServicesProvider } from '../../../providers/administrador-crear-ciclovia-service.ts/administrador-crear-ciclovia-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-ciclovia',
  templateUrl: './crear-ciclovia.page.html',
  styleUrls: ['./crear-ciclovia.page.scss'],
})
export class CrearCicloviaPage implements OnInit {

  ciclovia = {
    nombre_ciclovia : "",
    dia : "",
    hora_inicio: "",
    hora_fin: "",
    ruta: {
      inicio: {
        lat: "",
        log: ""
      },
      fin: {
        lat: "",
        log: ""
      }
    }
  }

  constructor(private router: Router, public administradorCrearCicloviaServicesProvider: AdministradorCrearCicloviaServicesProvider, public alertController: AlertController) { }

  ngOnInit() {
  }

  crearCiclovia() {
    if (this.validarCamposVacios()) {
      this.mostrarAlerta('Campos vacios', 'Los campos no deben de estar vacios.')
    } else {
      this.administradorCrearCicloviaServicesProvider.crearCiclovia(this.ciclovia).subscribe(
        (data) => {
          if (data["tipo"] == "error_interno") {
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
    if (this.ciclovia['nombre_ciclovia'] == "" || this.ciclovia['dia'] == "" || this.ciclovia['hora_inicio'] == "" || this.ciclovia['hora_fin'] == "" || 
        this.ciclovia['ruta']['inicio']['lat'] == "" || this.ciclovia['ruta']['inicio']['log'] == "" || this.ciclovia['ruta']['fin']['lat'] == "" || this.ciclovia['ruta']['fin']['log'] == "") {
      return true;
    } else {
      return false;
    }
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
