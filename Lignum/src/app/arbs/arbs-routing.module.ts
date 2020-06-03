import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbsPage } from './arbs.page';

const routes: Routes = [
  {
    path: '',
    component: ArbsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbsPageRoutingModule {}
