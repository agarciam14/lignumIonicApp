import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class LoginServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  
}