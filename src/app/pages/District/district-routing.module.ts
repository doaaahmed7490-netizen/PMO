import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDistrictComponent } from './add-district/add-district.component';
import { EditDistrictComponent } from './edit-district/edit-district.component';
import { ListDistrictComponent } from './list-district/list-district.component';





const routes: Routes = [
  {
   path: '',
    component: ListDistrictComponent,
  },
  {
    path: 'add',
    component: AddDistrictComponent,
  },
  {
    path: 'edit/:id',
    component: EditDistrictComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DistrictRoutingModule { }
