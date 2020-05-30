import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosUsuarioPageRoutingModule } from './datos-usuario-routing.module';

import { DatosUsuarioPage } from './datos-usuario.page';
import { CambiarContrasenaPage } from '../../usuario/cambiar-contrasena/cambiar-contrasena.page';
import { CambiarContrasenaPageModule } from '../../usuario/cambiar-contrasena/cambiar-contrasena.module';
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
    DatosUsuarioPageRoutingModule,
    CambiarContrasenaPageModule,
    ImagenModalPageModule
  ],
  declarations: [DatosUsuarioPage]
})
export class DatosUsuarioPageModule {}
