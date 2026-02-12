import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { ListPrivilagesComponent } from './list-privilages/list-privilages.component';
import { ListRoleComponent } from './list-role/list-role.component';




const routes: Routes = [
  {
    path: '',
    component: ListRoleComponent,
  },
 
 {
    path: 'add',
    component: AddRoleComponent,
  },
  {
    path: 'edit/:id',
    component: EditRoleComponent,
  },
  {
    path: 'Permissions/:id',
    component: ListPrivilagesComponent,
  },
  {
    path: 'Permissions',
    component: ListPrivilagesComponent,
  },
  /*{
    path: 'Test',
    component: TestComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
