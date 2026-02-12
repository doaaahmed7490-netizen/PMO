import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';





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
  }
  /*{
    path: 'Test',
    component: TestComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
