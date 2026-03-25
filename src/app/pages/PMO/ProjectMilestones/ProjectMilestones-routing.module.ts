import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListProjectMilestonesComponent } from './List-ProjectMilestones/List-ProjectMilestones.component';
import { AddProjectMilestonesComponent } from './Add-ProjectMilestones/Add-ProjectMilestones.component';





const routes: Routes = [
  {
   path: '',
    component: ListProjectMilestonesComponent,
  },
  {
    path: 'add',
    component: AddProjectMilestonesComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ProjectMilestonesRoutingModule { }
