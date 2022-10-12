import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { ADMIN_Routes } from './routing/admin-routing';
import { AUTHENTICATION_ROUTES } from './routing/authentication-routing';

const routes: Routes = [
  {path:'',component:AuthenticationComponent,children:AUTHENTICATION_ROUTES},
  {path:'admin',component:AdminComponent,children:ADMIN_Routes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
