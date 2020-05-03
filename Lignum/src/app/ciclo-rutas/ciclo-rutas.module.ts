import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CicloRutasPageRoutingModule } from './ciclo-rutas-routing.module';

import { CicloRutasPage } from './ciclo-rutas.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const routes: Routes = [
  {
    path: '',
    component: CicloRutasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloRutasPageRoutingModule,
    RouterModule.forChild(routes),
      ReactiveFormsModule
  ],
  declarations: [CicloRutasPage],
  providers: [Geolocation]
})
export class CicloRutasPageModule {}
