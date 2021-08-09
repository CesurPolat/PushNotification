import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { AuthGuard } from './services/_base_services/auth.guard';
import { DefaultLayoutComponent } from './_default_layout';

const routes: Routes = [
  { path: '', pathMatch: 'full' , redirectTo: '/is-emirleri/liste' },
  { path: '', component: DefaultLayoutComponent,  canActivate: [AuthGuard],
    children: [
      { path: 'is-emirleri', loadChildren: () => import('./pages/work-orders/work-orders.module').then(m => m.WorkOrdersModule) },
      { path: 'ayarlar', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) },
    ],
  },
  { path: 'giris', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: '**', component:Error404Component },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
