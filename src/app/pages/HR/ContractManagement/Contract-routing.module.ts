import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContractComponent } from './List-Contract/List-Contract.component';
import { AddContractComponent } from './Add-Contract/Add-Contract.component';





const routes: Routes = [
  {
   path: '',
    component: ListContractComponent,
  },
  {
    path: 'add',
    component: AddContractComponent,
  },
  /*{
    path: 'edit/:id',
    component: EditDepartmentComponent,
  },*/
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ContractRoutingModule { }
