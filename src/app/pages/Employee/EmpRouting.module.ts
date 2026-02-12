import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';



const routes: Routes = [
  {
    path: '',
    component: ListEmployeesComponent,
  },
 
 {
    path: 'add',
    component: AddEmployeeComponent,
  },
  {
    path: 'edit/:id',
    component: EditEmployeeComponent,
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
export class EmpRoutingModule { }
