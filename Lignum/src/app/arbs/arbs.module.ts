import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbsPageRoutingModule } from './arbs-routing.module';

import { ArbsPage } from './arbs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbsPageRoutingModule
  ],
  declarations: [ArbsPage]
})
export class ArbsPageModule {}
