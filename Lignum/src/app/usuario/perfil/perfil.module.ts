import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { CambiarContrasenaPage } from '../cambiar-contrasena/cambiar-contrasena.page';
import { CambiarContrasenaPageModule } from '../cambiar-contrasena/cambiar-contrasena.module';
import { ImagenModalPage } from '../../usuario/imagen-modal/imagen-modal.page';
import { ImagenModalPageModule } from '../../usuario/imagen-modal/imagen-modal.module';

@NgModule({
  entryComponents: [
    CambiarContrasenaPage,
    ImagenModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    CambiarContrasenaPageModule,
    ImagenModalPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
