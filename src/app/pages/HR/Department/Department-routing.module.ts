import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDepartmentComponent } from './List-Department/List-Department.component';
import { AddDepartmentComponent } from './Add-Department/Add-Department.component';
import { EditDepartmentComponent } from './Edit-Department/Edit-Department.component';





const routes: Routes = [
  {
   path: '',
    component: ListDepartmentComponent,
  },
  {
    path: 'add',
    component: AddDepartmentComponent,
  },
  {
    path: 'edit/:id',
    component: EditDepartmentComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DepartmentRoutingModule { }
