import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTransactionComponent } from './List-Transaction/List-Transaction.component';
import { AddTransactionComponent } from './Add-Transaction/Add-Transaction.component';





const routes: Routes = [
  {
   path: '',
    component: ListTransactionComponent,
  },
  {
    path: 'add',
    component: AddTransactionComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TransactionRoutingModule { }
