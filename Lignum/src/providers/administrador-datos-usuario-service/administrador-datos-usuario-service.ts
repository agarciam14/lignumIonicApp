import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class AdministradorDatosUsuarioServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public modificarUsuario(usuario) {
    return this.http.post(this.apiUrl+'', {});
  }

  public modificarContrasena() {
      
  }

  public eliminarUsuario() {

  }

}