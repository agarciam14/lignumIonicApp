import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Desde aca se importan los providers
import { ProviderSettingsProvider } from '../providers/provider-settings/provider-settings';
import { GeolocalizacionServicesProvider } from '../providers/geolocalizacion-service/geolocalizacion-service';
import { RegistroUsuarioNuevoServicesProvider } from '../providers/registro-usuario-nuevo-service/registro-usuario-nuevo-service';
import { LoginServicesProvider } from '../providers/login-service/login-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProviderSettingsProvider,
    GeolocalizacionServicesProvider,
    RegistroUsuarioNuevoServicesProvider,
    LoginServicesProvider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
