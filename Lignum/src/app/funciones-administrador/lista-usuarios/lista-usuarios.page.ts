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

  constructor(public administradorListarUsuariosServicesProvider: AdministradorListarUsuariosServicesProvider, public alertController: AlertController) {
    this.traerUsuarios();
  }

  ngOnInit() {
  }

  traerUsuarios() {
    this.administradorListarUsuariosServicesProvider.traerUsuarios().subscribe(
      (data) => {
        if(data['tipo'] == 'error_interno') {
          this.mostrarAlerta('Error en el servidor', data['mensaje']);
        } else if(data['tipo'] == "aprobado") {
          this.usuarios = data['mensaje'];
        } else {
          this.mostrarAlerta('Mensaje malformado', 'El paquete no se logro enviar bien.')
        }
      }, (error) => {
        this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
      }
    );
  }

  infoUsuario(documento) {
    console.log(documento);
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
