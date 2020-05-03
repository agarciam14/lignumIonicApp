import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class AdministradorCrearUsuarioServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public crearUsiario(usuario) {
    return this.http.post(this.apiUrl+'/api/crud_administrador/crear_usuario', {'usuario': usuario});
  }

}