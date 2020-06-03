import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class ArbolesServicesProvider{


  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { 
    
  }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public traerarboles() {
    return this.http.get(this.apiUrl+'/api/arboles/traer_arboles');
  }

}