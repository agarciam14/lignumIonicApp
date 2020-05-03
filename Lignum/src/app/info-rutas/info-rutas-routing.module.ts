import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoRutasPage } from './info-rutas.page';

const routes: Routes = [
  {
    path: '',
    component: InfoRutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRutasPageRoutingModule {}
