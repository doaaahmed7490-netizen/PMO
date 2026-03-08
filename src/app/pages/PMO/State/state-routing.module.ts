import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListStateComponent } from './List-State/List-State.component';
import { AddStateComponent } from './Add-State/Add-State.component';





const routes: Routes = [
  {
   path: '',
    component: ListStateComponent,
  },
  {
    path: 'add',
    component: AddStateComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class StateRoutingModule { }
