import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
{ path: 'admins-page', loadChildren: () => import('./admins/admins.module').then(m => m.AdminsModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
