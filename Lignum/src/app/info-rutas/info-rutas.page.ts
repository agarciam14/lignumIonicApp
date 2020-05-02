import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConsultaApiRutasServicesProvider } from '../../providers/consulta-api-rutas-service/consulta-api-rutas-service';

@Component({
  selector: 'app-info-rutas',
  templateUrl: './info-rutas.page.html',
  styleUrls: ['./info-rutas.page.scss'],
})
export class InfoRutasPage implements OnInit {

  rutas = [];

  constructor(public consultaApiRutasProvider: ConsultaApiRutasServicesProvider, public alertController: AlertController ) {
    this.mostrarRuta();
  }

  ngOnInit() {
  }

  async mostrarAlerta(titulo, mensaje) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

  mostrarRuta(){
    this.consultaApiRutasProvider.obtenerRutas().subscribe(
      (data) => {
        this.rutas = data["mensaje"];
        //console.log(data);
      }, (error) => {
        this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
      }
    );
  }


}
