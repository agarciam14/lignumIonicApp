import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { CambiarContrasenaPage } from '../cambiar-contrasena/cambiar-contrasena.page';
import { CambiarContrasenaPageModule } from '../cambiar-contrasena/cambiar-contrasena.module';

@NgModule({
  entryComponents: [
    CambiarContrasenaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    CambiarContrasenaPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
