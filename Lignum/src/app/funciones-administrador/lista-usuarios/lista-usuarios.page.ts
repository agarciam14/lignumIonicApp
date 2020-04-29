import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdministradorListarUsuariosServicesProvider } from '../../../providers/administrador-listar-usuarios-service/administrador-listar-usuarios-service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
})
export class ListaUsuariosPage implements OnInit {

  usuarios = [];

  constructor(public administradorListarUsuariosServicesProvider: AdministradorListarUsuariosServicesProvider, public alertController: AlertController) { }

  ngOnInit() {
  }

  traerUsuarios() {
    this.administradorListarUsuariosServicesProvider.traerUsuarios().subscribe(
      (data) => {

      }, (error) => {
        this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
      }
    );
  }

  infoUsuario() {

  }

  crearUsuario() {

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
