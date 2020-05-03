import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUsuarioNuevoPageRoutingModule } from './registro-usuario-nuevo-routing.module';

import { RegistroUsuarioNuevoPage } from './registro-usuario-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUsuarioNuevoPageRoutingModule
  ],
  declarations: [RegistroUsuarioNuevoPage]
})
export class RegistroUsuarioNuevoPageModule {}
