import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

  @Input() nombre_usuario: string;
  @Input() imagen: string;
  imagenSelec = '';
  imagenes = [
    'bicicleta.png',
    'ciclistaH.png',
    'ciclistaM.png',
    'ecologia.png',
    'icon.png',
    'palmera.png'
  ];

  constructor(private modalController: ModalController, private alertController: AlertController) { 

  }

  ngOnInit() {
  }

  seleccionarImagen(i) {
    this.imagenSelec = i;
    this.mostrarAlerta('Imágen seleccionada', 'La imágen se ha seleccionado satisfactoriamente');
  }

  volver() {
    if (this.imagenSelec == "") {
      this.modalController.dismiss({
        imagen: this.imagen
      });
    } else {
      this.modalController.dismiss({
        imagen: this.imagenSelec
      });
    }
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
