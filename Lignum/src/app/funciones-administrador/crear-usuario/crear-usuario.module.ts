import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearUsuarioPageRoutingModule } from './crear-usuario-routing.module';

import { CrearUsuarioPage } from './crear-usuario.page';
import { ImagenModalPage } from '../../usuario/imagen-modal/imagen-modal.page';
import { ImagenModalPageModule } from '../../usuario/imagen-modal/imagen-modal.module';

@NgModule({
  entryComponents: [
    ImagenModalPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearUsuarioPageRoutingModule,
    ImagenModalPageModule
  ],
  declarations: [CrearUsuarioPage]
})
export class CrearUsuarioPageModule {}
