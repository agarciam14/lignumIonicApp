import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CicloRutasPage } from './ciclo-rutas.page';

const routes: Routes = [
  {
    path: '',
    component: CicloRutasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CicloRutasPageRoutingModule {}
