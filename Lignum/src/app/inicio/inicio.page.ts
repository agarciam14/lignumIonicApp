import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute,Router } from '@angular/router';
import { AutenticacionService } from '../services/autenticacion.service';
import { InfoUsuarioHomeServicesProvider } from '../../providers/info-usuario-home-service/info-usuario-home-service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario= {
    'nombre_usuario': '',
    'documento': '',
    'puntaje': 0,
    'recorrido': 0,
  }

  constructor(public alertController: AlertController,private infoUsuarioHomeServicesProvider: InfoUsuarioHomeServicesProvider,private autenticacionService: AutenticacionService, private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      this.usuario['documento'] = this.autenticacionService.document_;
      this.traerInformacionUsuario();
    });
  }

  ionViewWillEnter(){
    this.traerInformacionUsuario();
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

  ngOnInit() {
  }

  irInformacionRutas(){
    this.router.navigate(['info-rutas']);
  }

  irInformacionVias(){
    this.router.navigate(['info-ciclovias']);
  }

  irCrearCiclovia(){
    this.router.navigate(['crear-ciclovia']);
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
