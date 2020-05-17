import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class ListarCicloviasServicesProvider{


  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { 
    
  }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public traerCiclovias() {
    return this.http.get(this.apiUrl+'/api/crud_administrador/traer_ciclovias');
  }

}