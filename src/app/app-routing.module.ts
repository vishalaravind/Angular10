import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { AboutComponent } from './layout/about/about.component';
import { CreateEditDeleteComponent } from './layout/create-edit-delete/create-edit-delete.component';
import { EmployeeComponent } from './layout/employee/employee.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [  
  {
   path:'',
   component: LayoutComponent,
   canActivate : [AuthGuard],
  children:[
      {  
      path : 'table',
      component: EmployeeComponent, 
      canActivate : [AuthGuard],
      },
      {
        path :'create/edit',
        component: CreateEditDeleteComponent,
        canActivate: [AuthGuard],
      },
      {
        path:'create/edit/:id',
        component: CreateEditDeleteComponent,
        canActivate:[ AuthGuard],
      },
      {
        path:'about',
        component:AboutComponent,
        canActivate:[ AuthGuard],
      }
  ]
  },
  {
  path:'login',
  component:LoginComponent,
  },
  {
    path:'logout',
    component:LogoutComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
