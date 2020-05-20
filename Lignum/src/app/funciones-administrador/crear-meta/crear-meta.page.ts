import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdministradorCrearMetaServicesProvider } from '../../../providers/administrador-crear-meta-service/administrador-crear-meta-service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-meta',
  templateUrl: './crear-meta.page.html',
  styleUrls: ['./crear-meta.page.scss'],
})
export class CrearMetaPage implements OnInit {

  meta = {
    nombre_meta: "",
    descripcion: "",
    objetivo: 0,
    puntaje: 0,
    dependencias: []
  }
  
  constructor(private router: Router, public administradorCrearMetaServicesProvider: AdministradorCrearMetaServicesProvider, public alertController: AlertController) { }

  ngOnInit() {
  }

  crearMeta(){
    if (this.validarCamposVacios()) {
      this.mostrarAlerta('Campos vacios', 'Los campos nombre, objetivo, descripcion y puntaje no deben de estar vacios.')
    } else {
      this.administradorCrearMetaServicesProvider.crearMeta(this.meta).subscribe(
        (data) => {
          if (data["tipo"] == "error_nombre_meta") {
            this.mostrarAlerta('Meta existente', data['mensaje']);
          }
        }, 
        (error) =>{
          this.mostrarAlerta('Error conexion', 'Ocurrio un error, revisa tu conexion a internet');
        }
      );
    }
  }

  validarCamposVacios() {
    if (this.meta['nombre_meta'] == "" || this.meta['descripcion'] == "" || this.meta['objetivo'] == 0 || this.meta['puntaje'] == 0) {
      return true;
    } else {
      return false;
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

  volver() {
    this.router.navigate(['lista-usuarios']);
  }

}
