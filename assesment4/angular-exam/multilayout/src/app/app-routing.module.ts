import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DepartmentComponent } from './admin/department/department.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AUTHENTICATION_Routes } from './routing/authentication-routing';

const routes: Routes = [
  {path:'',component:AuthenticationComponent,children:AUTHENTICATION_Routes},
  {path:'admin',component:AdminComponent,children:AUTHENTICATION_Routes},
  {path:'',component:AdminDashboardComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'department',component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
