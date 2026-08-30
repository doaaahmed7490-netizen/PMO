import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListContractTypeComponent } from './List-ContractType/List-ContractType.component';
import { AddContractTypeComponent } from './Add-ContractType/Add-ContractType.component';





const routes: Routes = [
  {
   path: '',
    component: ListContractTypeComponent,
  },
  {
    path: 'add',
    component: AddContractTypeComponent,
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


export class ContractTypeRoutingModule { }
