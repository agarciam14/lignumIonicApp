import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderSettingsProvider } from '../provider-settings/provider-settings';

@Injectable()
export class AdministradorDatosUsuarioServicesProvider {

  constructor(public http: HttpClient, public providerSettingsProvider: ProviderSettingsProvider) { }

  apiUrl = this.providerSettingsProvider.getMainUrl();

  public traerInformacionUsuario(documento) {
    return this.http.get(this.apiUrl+'/api/crud_administrador/traer_datos_usuario?documento='+documento);
  }

  public modificarUsuario(usuario) {
    return this.http.post(this.apiUrl+'/api/crud_administrador/modificar_usuario', {'usuario': usuario});
  }

  public eliminarUsuario(usuario) {
    return this.http.post(this.apiUrl+'/api/crud_administrador/eliminar_usuario', {'usuario': usuario});
  }

}