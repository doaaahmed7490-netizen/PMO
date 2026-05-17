import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListBidComponent } from './List-Bid/List-Bid.component';
import { AddBidComponent } from './Add-Bid/Add-Bid.component';
import { AddBidTasksComponent } from '../BidTasks/Add-BidTasks/Add-BidTasks.component';





const routes: Routes = [
  {
   path: '',
    component: AddBidComponent,
  },
  {
    path: 'list',
    component: ListBidComponent,
  },
  /*{
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


export class BidRoutingModule { }
