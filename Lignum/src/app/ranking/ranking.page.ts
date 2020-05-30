import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras, ActivatedRoute, Navigation } from '@angular/router';
import { RankingServicesProvider } from '../../providers/ranking-service/ranking-service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  ranking = [{
    "nombre_usuario": "",
    "puntos": ""
  },
  {
    "nombre_usuario": "",
    "puntos": ""
  },
  {
    "nombre_usuario": "",
    "puntos": ""
  }
  ];


  constructor(private route: ActivatedRoute, public router: Router, public RankingServicesProvider: RankingServicesProvider, public alertController: AlertController) {
    this.traerRanking();
   }

  ngOnInit() {
  }

  traerRanking() {
    this.RankingServicesProvider.traerRanking().subscribe(
      (data) => {
        if(data['tipo'] == 'error_interno') {
          this.mostrarAlerta('Error en el servidor', data['mensaje']);
        } else if(data['tipo'] == "aprobado") {
          this.ranking = data['mensaje'];
          console.log(this.ranking[0]["nombre_usuario"]);
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
