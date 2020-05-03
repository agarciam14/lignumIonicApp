import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class RegistroUsuarioNuevoServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public registroUsiarioNuevo(usuario) {
    return this.http.post(this.apiUrl+'/api/registro_usuario', {'usuario': usuario});
  }

}