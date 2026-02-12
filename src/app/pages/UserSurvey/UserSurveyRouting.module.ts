import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';

import { SubmitSurveyComponent } from './submit-survey/submit-survey.component';



const routes: Routes = [
  {
    path: 'SubmitSurvey/:id',
    component: SubmitSurveyComponent,
  },
  {
    path: '',
    component: SubmitSurveyComponent,
  },
 /*{
    path: 'add',
    component: AddSurveyComponent,
  },
  {
 //   path: 'edit/:id',
    path: 'edit',

    component: EditSurveyComponent,
  }*/
  /*{
    path: 'Test',
    component: TestComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSurveyRoutingModule { }
