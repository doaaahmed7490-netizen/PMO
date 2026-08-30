import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddVacationTypeComponent } from './Add-VacationType/Add-VacationType.component';
import { ListVacationTypeComponent } from './List-VacationType/List-VacationType.component';





const routes: Routes = [
  {
   path: '',
    component: ListVacationTypeComponent,
  },
  {
    path: 'add',
    component: AddVacationTypeComponent,
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


export class VacationTypeRoutingModule { }
