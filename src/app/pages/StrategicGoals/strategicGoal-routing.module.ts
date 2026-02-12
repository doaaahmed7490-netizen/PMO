import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddStrategicGoalComponent } from './add-strategic-goal/add-strategic-goal.component';
import { EditStrategicGoalComponent } from './edit-strategic-goal/edit-strategic-goal.component';
import { ListStrategicGoalComponent } from './list-strategic-goal/list-strategic-goal.component';




const routes: Routes = [
  {
    path: '',
    component: ListStrategicGoalComponent,

   // component: AddStrategicGoalComponent,
  },
 
 {
    path: 'add',
    component: AddStrategicGoalComponent,
  },
  {
    path: 'edit/:id',
    component: EditStrategicGoalComponent,
  }
  /*{
    path: 'Test',
    component: TestComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategicGoalRoutingModule { }
