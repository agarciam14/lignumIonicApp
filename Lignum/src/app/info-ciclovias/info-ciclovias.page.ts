import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ListarCicloviasServicesProvider } from '../../providers/listar-ciclovias-service/listar-ciclovias-service';

@Component({
  selector: 'app-info-ciclovias',
  templateUrl: './info-ciclovias.page.html',
  styleUrls: ['./info-ciclovias.page.scss'],
})
export class InfoCicloviasPage implements OnInit {

  ciclovias = [];

  constructor(private route: ActivatedRoute, public router: Router, public ListarCicloviasServicesProvider: ListarCicloviasServicesProvider, public alertController: AlertController) { 
    this.route.queryParams.subscribe(params => {
      this.traerCiclovias();
    });
  }

  ngOnInit() {
  }

  traerCiclovias() {
    this.ListarCicloviasServicesProvider.traerCiclovias().subscribe(
      (data) => {
        if(data['tipo'] == 'error_interno') {
          this.mostrarAlerta('Error en el servidor', data['mensaje']);
        } else if(data['tipo'] == "aprobado") {
          this.ciclovias = data['mensaje'];
          console.log(this.ciclovias);
        } else {
          this.mostrarAlerta('Mensaje malformado', 'El paquete no se logro enviar bien.')
        }
      }, (error) => {
        this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
      }
    );
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
