import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUsuarioNuevoPageRoutingModule } from './registro-usuario-nuevo-routing.module';

import { RegistroUsuarioNuevoPage } from './registro-usuario-nuevo.page';
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
    RegistroUsuarioNuevoPageRoutingModule,
    ImagenModalPageModule
  ],
  declarations: [RegistroUsuarioNuevoPage]
})
export class RegistroUsuarioNuevoPageModule {}
