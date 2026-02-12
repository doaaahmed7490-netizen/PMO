import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { SurveyModel } from '../../../models/Survey/Survey.model';
import { SurveyService } from '../../../services/Survey.service';

@Component({
  selector: 'app-survey-exception-dialog',
  templateUrl: './survey-exception-dialog.component.html',
  styleUrls: ['./survey-exception-dialog.component.scss']
})
export class SurveyExceptionDialogComponent  implements OnInit {
  @Input() Message: string;
  @Input() SurveyId: string;
surveyModel:SurveyModel;
surveyName:string;
FromDate:string;
ToDate:string;
SurveyMessageTitle="عنوان الإستبيان ="
SurveyMessageFrmDate=" من تاريخ ="
SurveyMessageToDate=" إلى تاريخ ="
WelcomeMessage="شكراً لمحاولة المشاركة فى التصويت"
  constructor(private ref: NbDialogRef<SurveyExceptionDialogComponent>
    ,    private surveyService: SurveyService
    ) {
  }

  closeCharts() {
    this.ref.close();
  }
  ngOnInit():void {

    this.surveyService.getById(this.SurveyId).subscribe( {
      next: (res) => {
        this.surveyModel = res.entity;
        this.surveyName=this.surveyModel.surveyName;
        this.FromDate=this.surveyModel.fromDateStr;
        this.ToDate=this.surveyModel.toDateStr;

      }
    });

  }

}

