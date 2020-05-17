import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCicloviaPage } from './crear-ciclovia.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCicloviaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCicloviaPageRoutingModule {}
