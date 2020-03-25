import { Component, OnInit } from '@angular/core';

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
    confirmar_contrasena: "",
    tipo: ""
  }

  constructor() { }

  ngOnInit() {
  }

}
