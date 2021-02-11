import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditDeleteComponent } from './create-edit-delete/create-edit-delete.component';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    CreateEditDeleteComponent,
    EmployeeComponent,
    LayoutComponent,
    AboutComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    CreateEditDeleteComponent,
    EmployeeComponent,
    LayoutComponent,
    AboutComponent
  ]
})
export class LayoutModule { }
