import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDistrictComponent } from './List-District/List-District.component';
import { AddDistrictComponent } from './Add-District/Add-District.component';





const routes: Routes = [
  {
   path: '',
    component: ListDistrictComponent,
  },
  {
    path: 'add',
    component: AddDistrictComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DistrictRoutingModule { }
