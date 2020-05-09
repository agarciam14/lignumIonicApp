import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticacionService } from './services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  loged = false;
  tipo = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private autenticacionService: AutenticacionService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.autenticacionService.authenticationState.subscribe(
        state => {
          if(state) {
            this.loged = true;
            this.tipo = this.autenticacionService.tipo;
            this.router.navigate(['lista-usuarios']);
          } else {
            this.loged = false;
            this.router.navigate(['login']);
          }
      });
    });
  }
}
