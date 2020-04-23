import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'arboles',
    loadChildren: () => import('./arboles/arboles.module').then( m => m.ArbolesPageModule)
  },
  {
    path: 'rutas',
    loadChildren: () => import('./rutas/rutas.module').then( m => m.RutasPageModule)
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GpsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
