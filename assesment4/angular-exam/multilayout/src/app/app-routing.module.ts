import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin/admin.component';
import { AuthenticationLayoutComponent } from './layout/authentication/authentication.component';


import { ADMIN_ROUTES } from './routing/admin-routing';


import { AUTHENTICATION_ROUTES } from './routing/authentication-routing';


const routes: Routes = [
  {path:'',component:AuthenticationLayoutComponent,children:AUTHENTICATION_ROUTES},
  {path:'',component:AdminLayoutComponent,children:ADMIN_ROUTES}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
