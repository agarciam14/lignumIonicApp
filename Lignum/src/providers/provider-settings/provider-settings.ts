import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const CONFIG = {
apiUrl: "http://localhost:5000/"

};

@Injectable()
export class ProviderSettingsProvider {

  constructor(public http: HttpClient) { }

  public getMainUrl() {
    return CONFIG.apiUrl;
  }
}