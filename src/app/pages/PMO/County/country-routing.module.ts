import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCountryComponent } from './List-Country/List-Country.component';
import { AddCountryComponent } from './Add-Country/Add-Country.component';
import { EditCountryComponent } from './Edit-Country/Edit-Country.component';





const routes: Routes = [
  {
   path: '',
    component: ListCountryComponent,
  },
  {
    path: 'add',
    component: AddCountryComponent,
  },
  {
    path: 'edit/:id',
    component: EditCountryComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class CountryRoutingModule { }
