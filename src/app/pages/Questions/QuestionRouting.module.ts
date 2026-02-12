import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddQuestionComponent } from './add-question/add-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { ListQuestionComponent } from './list-question/list-question.component';



const routes: Routes = [
  {
    path: '',
    component: ListQuestionComponent,
  },
 
 {
    path: 'add',
    component: AddQuestionComponent,
  },
  {
    path: 'edit/:id',
    component: EditQuestionComponent,
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
export class QuestionRoutingModule { }
