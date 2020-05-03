import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class ConsultaApiRutasServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public obtenerRutas() {
    return this.http.get(this.apiUrl+'/api/consulta_ApiRutas/obtener_ruta');
  }

}