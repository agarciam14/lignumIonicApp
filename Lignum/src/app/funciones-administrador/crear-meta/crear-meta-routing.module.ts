import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearMetaPage } from './crear-meta.page';

const routes: Routes = [
  {
    path: '',
    component: CrearMetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearMetaPageRoutingModule {}
