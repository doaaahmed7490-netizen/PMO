import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListProjectCategoryComponent } from './List-ProjectCategory/List-ProjectCategory.component';
import { AddProjectCategoryComponent } from './Add-ProjectCategory/Add-ProjectCategory.component';





const routes: Routes = [
  {
   path: '',
    component: ListProjectCategoryComponent,
  },
  {
    path: 'add',
    component: AddProjectCategoryComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ProjectCategoryRoutingModule { }
