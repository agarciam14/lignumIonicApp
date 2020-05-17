import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class AdministradorCrearCicloviaServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public crearCiclovia(ciclovia) {
    return this.http.post(this.apiUrl+'/api/crud_administrador/crea_ciclovia', {'ciclovia': ciclovia});
  }

}