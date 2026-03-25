import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCurrencyComponent } from './List-Currency/List-Currency.component';
import { AddCurrencyComponent } from './Add-Currency/Add-Currency.component';





const routes: Routes = [
  {
   path: '',
    component: ListCurrencyComponent,
  },
  {
    path: 'add',
    component: AddCurrencyComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CurrencyRoutingModule { }
