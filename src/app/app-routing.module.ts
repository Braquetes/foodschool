import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./auth/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'restore',
    loadChildren: () => import('./auth/restore/restore.module').then(m => m.RestorePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  },
  {
    path: 'comida/:id',
    loadChildren: () => import('./detalles/comida/comida.module').then(m => m.ComidaPageModule)
  },
  {
    path: 'bebida/:id',
    loadChildren: () => import('./detalles/bebida/bebida.module').then(m => m.BebidaPageModule)
  },
  {
    path: 'botana/:id',
    loadChildren: () => import('./detalles/botana/botana.module').then(m => m.BotanaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
