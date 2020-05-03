import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosUsuarioPageRoutingModule } from './datos-usuario-routing.module';

import { DatosUsuarioPage } from './datos-usuario.page';
import { CambiarContrasenaPage } from '../../cambiar-contrasena/cambiar-contrasena.page';
import { CambiarContrasenaPageModule } from '../../cambiar-contrasena/cambiar-contrasena.module';

@NgModule({
  entryComponents: [
    CambiarContrasenaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosUsuarioPageRoutingModule,
    CambiarContrasenaPageModule
  ],
  declarations: [DatosUsuarioPage]
})
export class DatosUsuarioPageModule {}
