import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCurrencyPricingComponent } from './List-CurrencyPricing/List-CurrencyPricing.component';
import { AddCurrencyPricingComponent } from './Add-CurrencyPricing/Add-CurrencyPricing.component';





const routes: Routes = [
  {
   path: '',
    component: ListCurrencyPricingComponent,
  },
  {
    path: 'add',
    component: AddCurrencyPricingComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CurrencyPricingRoutingModule { }
