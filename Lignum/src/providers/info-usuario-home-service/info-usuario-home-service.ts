import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class InfoUsuarioHomeServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public traerInformacionUsuario(documento) {
    return this.http.get(this.apiUrl+'/api/usuario_general/traer_datos_usuario?documento='+documento);
  }

  public modificarRecorrido(usuario, puntos){
    return this.http.post(this.apiUrl+'/api/usuario_general/modificar_recorrido', {'usuario': usuario, 'puntos':puntos});
  }
}