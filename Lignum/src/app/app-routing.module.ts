import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'registro-usuario-nuevo',
    loadChildren: () => import('./ingreso/registro-usuario-nuevo/registro-usuario-nuevo.module').then( m => m.RegistroUsuarioNuevoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./ingreso/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./ingreso/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
