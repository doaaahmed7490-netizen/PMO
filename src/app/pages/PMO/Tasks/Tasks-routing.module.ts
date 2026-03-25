import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AddTasksComponent } from './Add-Tasks/Add-Tasks.component';
import { ListTasksComponent } from './List-Tasks/List-Tasks.component';





const routes: Routes = [
  {
   path: '',
    component: ListTasksComponent,
  },
  {
    path: 'add',
    component: AddTasksComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class TasksRoutingModule { }
