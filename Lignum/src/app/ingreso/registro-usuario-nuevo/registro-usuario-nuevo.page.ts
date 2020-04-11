import { Component, OnInit } from '@angular/core';

import { RegistroUsuarioNuevoServicesProvider } from '../../../providers/registro-usuario-nuevo-service/registro-usuario-nuevo-service';

@Component({
  selector: 'app-registro-usuario-nuevo',
  templateUrl: './registro-usuario-nuevo.page.html',
  styleUrls: ['./registro-usuario-nuevo.page.scss'],
})
export class RegistroUsuarioNuevoPage implements OnInit {

  usuario = {
    nombre_usuario: "",
    documento: "",
    correo: "",
    contrasena: "",
    confirmar_contrasena: ""
  }

  constructor( public registroUsuarioNuevoServicesProvider: RegistroUsuarioNuevoServicesProvider) { }

  ngOnInit() {
  }

  crearUsuario() {
    this.registroUsuarioNuevoServicesProvider.registroUsiarioNuevo(this.usuario).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
