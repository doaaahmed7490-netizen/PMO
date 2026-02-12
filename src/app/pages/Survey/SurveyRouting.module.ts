import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ngdirective } from '../../shared/ngdirective.directive';
import { AddSurveyComponent } from './add-survey/add-survey.component';
import { EditSurveyComponent } from './edit-survey/edit-survey.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';
import { SurveyAnanlysisQstComponent } from './survey-ananlysis-qst/survey-ananlysis-qst.component';



const routes: Routes = [
  {
    path: '',
    component: ListSurveyComponent,
  },
 
 {
    path: 'add',
    component: AddSurveyComponent,
  },
  {
   path: 'edit/:id',
 //   path: 'edit',

    component: EditSurveyComponent,
  },
  {
    path: 'surveyqst',
  //   path: 'edit',
 
     component: SurveyAnanlysisQstComponent,
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
export class SurveyRoutingModule { }
