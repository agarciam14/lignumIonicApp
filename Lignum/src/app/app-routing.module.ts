import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
  },
  {
    path: 'crear-usuario',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./funciones-administrador/crear-usuario/crear-usuario.module').then( m => m.CrearUsuarioPageModule)
  },
  {
    path: 'lista-usuarios',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./funciones-administrador/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'datos-usuario',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./funciones-administrador/datos-usuario/datos-usuario.module').then( m => m.DatosUsuarioPageModule)
  },
  {
    path: 'ciclo-rutas',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./ciclo-rutas/ciclo-rutas.module').then( m => m.CicloRutasPageModule)
  },
  {
    path: 'info-rutas',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./info-rutas/info-rutas.module').then( m => m.InfoRutasPageModule)
  },
  {
    path: 'perfil',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'crear-meta',
    loadChildren: () => import('./funciones-administrador/crear-meta/crear-meta.module').then( m => m.CrearMetaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
