import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

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
