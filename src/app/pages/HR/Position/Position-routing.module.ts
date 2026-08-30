import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPositionComponent } from './Edit-Position/Edit-Position.component';
import { AddPositionComponent } from './Add-Position/Add-Position.component';
import { ListPositionComponent } from './List-Position/List-Position.component';





const routes: Routes = [
  {
   path: '',
    component: ListPositionComponent,
  },
  {
    path: 'add',
    component: AddPositionComponent,
  },
  {
    path: 'edit/:id',
    component: EditPositionComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PositionRoutingModule { }
