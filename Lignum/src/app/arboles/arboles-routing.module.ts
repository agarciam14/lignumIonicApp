import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbolesPage } from './arboles.page';

const routes: Routes = [
  {
    path: '',
    component: ArbolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbolesPageRoutingModule {}
