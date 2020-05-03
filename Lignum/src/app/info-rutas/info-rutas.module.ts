import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoRutasPageRoutingModule } from './info-rutas-routing.module';

import { InfoRutasPage } from './info-rutas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoRutasPageRoutingModule
  ],
  declarations: [InfoRutasPage]
})
export class InfoRutasPageModule {}
