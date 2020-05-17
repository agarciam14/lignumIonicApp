import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoCicloviasPage } from './info-ciclovias.page';

const routes: Routes = [
  {
    path: '',
    component: InfoCicloviasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoCicloviasPageRoutingModule {}
