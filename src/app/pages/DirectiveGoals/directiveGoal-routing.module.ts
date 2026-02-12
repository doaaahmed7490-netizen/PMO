import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddDirectiveGoalComponent } from './add-directive-goal/add-directive-goal.component';
import { EditDirectiveGoalComponent } from './edit-directive-goal/edit-directive-goal.component';
import { ListDirectiveGoalComponent } from './list-directive-goal/list-directive-goal.component';





const routes: Routes = [
  {
    path: '',
    component: ListDirectiveGoalComponent,
  },
 
 {
    path: 'add',
    component: AddDirectiveGoalComponent,
  },
  {
    path: 'edit/:id',
    component: EditDirectiveGoalComponent,
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
export class DirectiveGoalRoutingModule { }
