import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCicloviaPageRoutingModule } from './crear-ciclovia-routing.module';

import { CrearCicloviaPage } from './crear-ciclovia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCicloviaPageRoutingModule
  ],
  declarations: [CrearCicloviaPage]
})
export class CrearCicloviaPageModule {}
