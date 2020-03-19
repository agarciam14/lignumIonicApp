import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroUsuarioNuevoPage } from './registro-usuario-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroUsuarioNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroUsuarioNuevoPageRoutingModule {}
