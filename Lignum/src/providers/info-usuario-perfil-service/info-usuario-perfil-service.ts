import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class InfoUsuarioPerfilServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public traerInformacionUsuario(documento) {
    return this.http.get(this.apiUrl+'/api/crud_administrador/traer_datos_usuario?documento='+documento);
  }

  public modificarUsuario(usuario) {
    return this.http.post(this.apiUrl+'/api/crud_administrador/modificar_usuario', {'usuario': usuario});
  }

  public modificarContrasena(documento, usuario, contrasena) {
    return this.http.post(this.apiUrl+'/api/crud_administrador/modificar_contrasena', {'documento': documento, 'nombre_usuario': usuario, 'contrasena': contrasena});
  }

}