import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { RegistroUsuarioNuevoServicesProvider } from '../../../providers/registro-usuario-nuevo-service/registro-usuario-nuevo-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    'usuario': "",
    'contrasena': ""
  };

  constructor(private registroUsuarioNuevoServicesProvider: RegistroUsuarioNuevoServicesProvider, private router: Router) { }

  ngOnInit() {
  }

}
