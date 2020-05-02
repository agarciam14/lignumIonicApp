import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdministradorDatosUsuarioServicesProvider } from '../../../providers/administrador-datos-usuario-service/administrador-datos-usuario-service';
import { ActivatedRoute, Router } from '@angular/router';

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
    'tipo': ''
  }

  constructor(private route: ActivatedRoute, private router: Router, private administradorDatosUsuarioServicesProvider: AdministradorDatosUsuarioServicesProvider, public alertController: AlertController) {
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

  }

  modificarImagen() {

  }

  cambiarContrasena() {
    this.cambiarContrasenaModal();
  }

  eliminarUsuario() {

  }

  volver() {
    this.router.navigate(['lista-usuarios']);
  }

  async cambiarContrasenaModal() {
    const alert = await this.alertController.create({
      header: "Cambiar contraseña",
      buttons: ['ACEPTAR']
    });

    await alert.present();
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
