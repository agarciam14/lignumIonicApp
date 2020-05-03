import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class GeolocalizacionServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public testPost(correo, llave) {
    return this.http.post(this.apiUrl+'/api/geolocalizado/test_post', {'correo': correo, 'llave': llave});
  }

  public testGet(user, edad) {
    return this.http.get(this.apiUrl+'/api/geolocalizado/test_get?user='+ user +'&edad='+ edad);
  }

}