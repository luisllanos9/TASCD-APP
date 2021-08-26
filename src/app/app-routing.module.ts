import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuardGuard } from './guards/user-guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    //canActivate: [ UserGuardGuard ]
    canLoad: [ UserGuardGuard ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',  
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'qtdd',
    loadChildren: () => import('./pages/qtdd/qtdd.module').then( m => m.QTDDPageModule)
  },
  {
    path: 'pampe',
    loadChildren: () => import('./pages/pampe/pampe.module').then( m => m.PAMPEPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'stadistics',
    loadChildren: () => import('./pages/stadistics/stadistics.module').then( m => m.StadisticsPageModule)
  },
  {
    path: 'qtdd-viwer',
    loadChildren: () => import('./pages/qtdd-viwer/qtdd-viwer.module').then( m => m.QtddViwerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
