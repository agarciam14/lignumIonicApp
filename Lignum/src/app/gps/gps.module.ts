import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { GpsPageRoutingModule } from './gps-routing.module';

import { GpsPage } from './gps.page';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    GpsPageRoutingModule,
  ],
  declarations: [GpsPage],
  providers: []
})
export class GpsPageModule {}
