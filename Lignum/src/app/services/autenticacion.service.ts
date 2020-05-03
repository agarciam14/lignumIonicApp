import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';


const TOKEN_KEY = 'auth-token';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.verificarToken();
    });
  }

  login(tipoUsuario) {
    if(tipoUsuario == "administrador") {
      return this.storage.set(TOKEN_KEY, 'papiUdLoQueEsEsUnJeque').then(res => {
        this.authenticationState.next(true);
      });
    } else if(tipoUsuario == "usuario_comun") {
      return this.storage.set(TOKEN_KEY, 'noGatoUdEsMasBienBasiquito').then(res => {
        this.authenticationState.next(true);
      });
    } else {
      return this.authenticationState.next(false);
    }
    
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  estaLogueado() {
    return this.authenticationState.value;
  }

  verificarToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if(res) {
        this.authenticationState.next(true);
      }
    });
  }
}
