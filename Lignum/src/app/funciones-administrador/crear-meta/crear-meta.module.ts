import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearMetaPageRoutingModule } from './crear-meta-routing.module';

import { CrearMetaPage } from './crear-meta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearMetaPageRoutingModule
  ],
  declarations: [CrearMetaPage]
})
export class CrearMetaPageModule {}
