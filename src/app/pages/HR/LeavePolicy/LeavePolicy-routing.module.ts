import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { ListLeavePolicyComponent } from './List-LeavePolicy/List-LeavePolicy.component';
import { AddLeavePolicyComponent } from './Add-LeavePolicy/Add-LeavePolicy.component';





const routes: Routes = [
  {
   path: '',
    component: ListLeavePolicyComponent,
  },
  {
    path: 'add',
    component: AddLeavePolicyComponent,
  },
 /* {
    path: 'edit/:id',
    component: ,
  },*/
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class LeavePolicyRoutingModule { }
