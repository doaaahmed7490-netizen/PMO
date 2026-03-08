import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListProjectTypeComponent } from './List-ProjectType/List-ProjectType.component';
import { AddProjectTypeComponent } from './Add-ProjectType/Add-ProjectType.component';





const routes: Routes = [
  {
   path: '',
    component: ListProjectTypeComponent,
  },
  {
    path: 'add',
    component: AddProjectTypeComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ProjectTypeRoutingModule { }
