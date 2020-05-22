import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';


const TOKEN_KEY = 'auth-token';
const documento_usuario = '';
const tipo = '';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  authenticationState = new BehaviorSubject(false);
  document_ = '';
  tipo = '';

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.verificarToken();
      this.verificarDocumento();
    });
  }

  login(usuario) {
    if(usuario['tipo'] == "administrador") {
      return this.storage.set(TOKEN_KEY, 'papiUdLoQueEsEsUnJeque').then(res => {
        this.storage.set(documento_usuario, usuario['documento']);
        this.storage.set(tipo, usuario['tipo']);
        this.authenticationState.next(true);
        this.document_ = usuario['documento'];
        this.tipo = usuario['tipo'];
      });
    } else if(usuario['tipo'] == "usuario_comun") {
      return this.storage.set(TOKEN_KEY, 'noGatoUdEsMasBienBasiquito').then(res => {
        this.storage.set(documento_usuario, usuario['documento']);
        this.storage.set(tipo, usuario['tipo']);
        this.authenticationState.next(true);
        this.document_ = usuario['documento'];
        this.tipo = usuario['tipo'];
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
    return this.storage.get(TOKEN_KEY).then(
      res => {
        if(res) {
          this.authenticationState.next(true);
        }
      }
    );
  }

  verificarDocumento() {
    return this.storage.get(documento_usuario).then(
      res => {
        if (res) {
          this.document_ = res;
        }
      }
    );
  }

  verificarTipo() {
    return this.storage.get(tipo).then(
      res => {
        if (res) {
          this.tipo = res;
        }
      }
    );
  }

}
