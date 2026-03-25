import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMilestonesComponent } from './Add-Milestones/Add-Milestones.component';
import { ListMilestonesComponent } from './List-Milestones/List-Milestones.component';





const routes: Routes = [
  {
   path: '',
    component: ListMilestonesComponent,
  },
  {
    path: 'add',
    component: AddMilestonesComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MilestonesRoutingModule { }
