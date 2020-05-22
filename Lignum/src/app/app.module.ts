import { AdministradorCrearCicloviaServicesProvider } from './../providers/administrador-crear-ciclovia-service.ts/administrador-crear-ciclovia-service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';


// Desde aca se importan los providers
import { ProviderSettingsProvider } from '../providers/provider-settings/provider-settings';
import { GeolocalizacionServicesProvider } from '../providers/geolocalizacion-service/geolocalizacion-service';
import { RegistroUsuarioNuevoServicesProvider } from '../providers/registro-usuario-nuevo-service/registro-usuario-nuevo-service';
import { LoginServicesProvider } from '../providers/login-service/login-service';
import { AdministradorCrearUsuarioServicesProvider } from '../providers/administrador-crear-usuario-service/administrador-crear-usuario-service';
import { AdministradorDatosUsuarioServicesProvider } from '../providers/administrador-datos-usuario-service/administrador-datos-usuario-service';
import { AdministradorListarUsuariosServicesProvider } from '../providers/administrador-listar-usuarios-service/administrador-listar-usuarios-service';
import { InfoUsuarioPerfilServicesProvider } from '../providers/info-usuario-perfil-service/info-usuario-perfil-service';
import { ConsultaApiRutasServicesProvider } from '../providers/consulta-api-rutas-service/consulta-api-rutas-service'; 
import { ListarCicloviasServicesProvider } from '../providers/listar-ciclovias-service/listar-ciclovias-service';
import { RankingServicesProvider } from '../providers/ranking-service/ranking-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProviderSettingsProvider,
    GeolocalizacionServicesProvider,
    RegistroUsuarioNuevoServicesProvider,
    LoginServicesProvider,
    AdministradorCrearUsuarioServicesProvider,
    AdministradorDatosUsuarioServicesProvider,
    AdministradorListarUsuariosServicesProvider,
    AdministradorCrearCicloviaServicesProvider,
    InfoUsuarioPerfilServicesProvider,
    ListarCicloviasServicesProvider,
    ConsultaApiRutasServicesProvider,
    RankingServicesProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
