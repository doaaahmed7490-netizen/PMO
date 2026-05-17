import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddBidTasksComponent } from '../BidTasks/Add-BidTasks/Add-BidTasks.component';
import { ReAssignComponent } from './ReAssign/ReAssign.component';





const routes: Routes = [
  {
   path: '',
    component: ReAssignComponent,
  },
  /*{
    path: 'list',
    component: ListBidComponent,
  },
  {
    path: 'Add',
    component: AddBidTasksComponent,
  }*/
  /*,
  {
    path: 'edit/:id',
    component: EditCountryComponent,
  },*/
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ReAssignEmployeeTaskRoutingModule { }
