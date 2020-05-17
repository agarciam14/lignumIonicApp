import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoCicloviasPageRoutingModule } from './info-ciclovias-routing.module';

import { InfoCicloviasPage } from './info-ciclovias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoCicloviasPageRoutingModule
  ],
  declarations: [InfoCicloviasPage]
})
export class InfoCicloviasPageModule {}
