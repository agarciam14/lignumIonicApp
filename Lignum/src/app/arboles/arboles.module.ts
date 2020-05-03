import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbolesPageRoutingModule } from './arboles-routing.module';

import { ArbolesPage } from './arboles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbolesPageRoutingModule
  ],
  declarations: [ArbolesPage]
})
export class ArbolesPageModule {}
