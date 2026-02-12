import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Chart, ChartTypeRegistry, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { ThemeModeService } from '../../../components/navbar/theme-mode.service';
import { SurveyQstAnalysis } from '../../../models/Survey/SurveyQstAnlysis.model';
import { RoleService } from '../../../services/role.service';
import { SurveyService } from '../../../services/Survey.service';

@Component({
  selector: 'app-charts-dialog',
  templateUrl: './charts-dialog.component.html',
  styleUrls: ['./charts-dialog.component.scss'],
})
export class ChartsDialogComponent implements OnInit {
  @Input() chartQuestions: string[];
  @Input() chartSurvey: string;
  surveyQstAnalysis:SurveyQstAnalysis[];

  @ViewChild('form') form: NgForm;
  chartInstances: Chart[] = [];
  themeSubscription: Subscription;
  labelColor: string;
  constructor(private ref: NbDialogRef<ChartsDialogComponent>
    ,private surveyResponse:SurveyService,
    private themeModeService: ThemeModeService,
    ) {
      Chart.register(...registerables);

    }

  closeCharts() {
    this.ref.close();
  }
Qst1:string;
type1:number;

Qst2:string;
type2:number;

Qst3:string;
type3:number;

Qst4:string;
type4:number;

Qst5:string;
type5:number;

Qst6:string;
type6:number;

Qst7:string;
type7:number;

Qst8:string;
type8:number;

Qst9:string;
type9:number;

Qst10:string;
type10:number;

Qst11:string;
type11:number;

Qst12:string;
type12:number;


Qst13:string;
type13:number;
Qst14:string;
type14:number;
Qst15:string;
type15:number;

Qst16:string;
type16:number;

Qst17:string;
type17:number;

Qst18:string;
type18:number;

Qst19:string;
type19:number;

Qst20:string;
type20:number;

res1:number;
res2:number;

res3:number;
res4:number;
res5:number;
res6:number;
res7:number;
res8:number;
res9:number;
res10:number;
length:number;
total1:Number;
total2:Number;
total3:Number;
total4:Number;
total5:Number;
total6:Number;
total7:Number;
total8:Number;
total9:Number;
total10:Number;

total11:Number;
total12:Number;
total13:Number;
total14:Number;
total15:Number;
total16:Number;
total17:Number;
total18:Number;
total19:Number;
total20:Number;
total21:number;
NoOfVotes:string=" عدد الأصوات= "
  ngOnInit():void {
    
    /*this.themeSubscription = this.themeModeService.themeMode.subscribe(
      (theme) => {
        this.labelColor =
          theme === 'default'
            ? 'rgba(10, 10, 10, 0.7)'
            : 'rgba(255, 255, 255, 0.7)';

        if (this.chartInstances.length > 0) {
          this.chartInstances.forEach((chart) => chart.destroy());
          this.chartInstances = [];
        }

        //this.renderChart('barChart', 'bar');
        this.renderChart('pieChart1',1,1,1, 'pie');
       // this.renderChart('lineChart', 'line');
      }
    );*/
   /* this.route.params.subscribe((params) => {
      this.Id = params["id"];

    });*/

    this.surveyResponse.GetAllSurveyQstAnalysis(this.chartSurvey).subscribe((res) => {
      // this.DashboardDto = res;
     this.surveyQstAnalysis=res;


/*res.forEach(element => {
 // this.renderChart('pieChart', 'pie');


});
*/
this.length=this.surveyQstAnalysis.length;
this.Qst1=this.surveyQstAnalysis[0].questText;
this.type1=this.surveyQstAnalysis[0].ansTypeEnum;
if(this.type1==1||this.type1==3)
{
this.res1=this.surveyQstAnalysis[0].response1;
this.res2=this.surveyQstAnalysis[0].response2;
this.total1=this.res1+this.res2;
this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChart('pieChart1',this.type1,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type1==2||this.type1==4||this.type1==6)
{
this.res1=this.surveyQstAnalysis[0].response1;
this.res2=this.surveyQstAnalysis[0].response2;
this.res3=this.surveyQstAnalysis[0].response3;
this.res4=this.surveyQstAnalysis[0].response4;
this.res5=this.surveyQstAnalysis[0].response5;
this.total1=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

/*    if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart1',this.type1,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type1==5)
{
this.res1=this.surveyQstAnalysis[0].response1;
this.res2=this.surveyQstAnalysis[0].response2;
this.res3=this.surveyQstAnalysis[0].response3;
this.res4=this.surveyQstAnalysis[0].response4;
this.res5=this.surveyQstAnalysis[0].response5;


this.res6=this.surveyQstAnalysis[0].response6;
this.res7=this.surveyQstAnalysis[0].response7;
this.res8=this.surveyQstAnalysis[0].response8;
this.res9=this.surveyQstAnalysis[0].response9;
this.res10=this.surveyQstAnalysis[0].response10;

this.total1=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;


this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChartFromOneToTen('pieChart1',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}


this.Qst2=this.surveyQstAnalysis[1].questText;
this.type2=this.surveyQstAnalysis[1].ansTypeEnum;
if(this.type2==1||this.type2==3)
{
this.res1=this.surveyQstAnalysis[1].response1;
this.res2=this.surveyQstAnalysis[1].response2;
this.total2=this.res1+this.res2;
this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart2',this.type2,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type2==2||this.type2==4||this.type2==6)
{
this.res1=this.surveyQstAnalysis[1].response1;
this.res2=this.surveyQstAnalysis[1].response2;
this.res3=this.surveyQstAnalysis[1].response3;
this.res4=this.surveyQstAnalysis[1].response4;
this.res5=this.surveyQstAnalysis[1].response5;
this.total2=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart2',this.type2,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type1==5)
{
this.res1=this.surveyQstAnalysis[1].response1;
this.res2=this.surveyQstAnalysis[1].response2;
this.res3=this.surveyQstAnalysis[1].response3;
this.res4=this.surveyQstAnalysis[1].response4;
this.res5=this.surveyQstAnalysis[1].response5;


this.res6=this.surveyQstAnalysis[1].response6;
this.res7=this.surveyQstAnalysis[1].response7;
this.res8=this.surveyQstAnalysis[1].response8;
this.res9=this.surveyQstAnalysis[1].response9;
this.res10=this.surveyQstAnalysis[1].response10;

this.total2=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart2',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}



this.Qst3=this.surveyQstAnalysis[2].questText;
this.type3=this.surveyQstAnalysis[2].ansTypeEnum;
if(this.type3==1||this.type3==3)
{
this.res1=this.surveyQstAnalysis[2].response1;
this.res2=this.surveyQstAnalysis[2].response2;
this.total3=this.res1+this.res2;
this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart3',this.type3,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type3==2||this.type3==4||this.type3==6)
{
this.res1=this.surveyQstAnalysis[2].response1;
this.res2=this.surveyQstAnalysis[2].response2;
this.res3=this.surveyQstAnalysis[2].response3;
this.res4=this.surveyQstAnalysis[2].response4;
this.res5=this.surveyQstAnalysis[2].response5;
this.total3=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart3',this.type3,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type3==5)
{
this.res1=this.surveyQstAnalysis[2].response1;
this.res2=this.surveyQstAnalysis[2].response2;
this.res3=this.surveyQstAnalysis[2].response3;
this.res4=this.surveyQstAnalysis[2].response4;
this.res5=this.surveyQstAnalysis[2].response5;


this.res6=this.surveyQstAnalysis[2].response6;
this.res7=this.surveyQstAnalysis[2].response7;
this.res8=this.surveyQstAnalysis[2].response8;
this.res9=this.surveyQstAnalysis[2].response9;
this.res10=this.surveyQstAnalysis[2].response10;

this.total3=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;


this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart3',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/************************** */

this.Qst4=this.surveyQstAnalysis[3].questText;
this.type4=this.surveyQstAnalysis[3].ansTypeEnum;
if(this.type4==1||this.type4==3)
{
this.res1=this.surveyQstAnalysis[3].response1;
this.res2=this.surveyQstAnalysis[3].response2;

this.total4=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart4',this.type4,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type4==2||this.type4==4||this.type4==6)
{
this.res1=this.surveyQstAnalysis[3].response1;
this.res2=this.surveyQstAnalysis[3].response2;
this.res3=this.surveyQstAnalysis[3].response3;
this.res4=this.surveyQstAnalysis[3].response4;
this.res5=this.surveyQstAnalysis[3].response5;

this.total4=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart4',this.type4,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type4==5)
{
this.res1=this.surveyQstAnalysis[3].response1;
this.res2=this.surveyQstAnalysis[3].response2;
this.res3=this.surveyQstAnalysis[3].response3;
this.res4=this.surveyQstAnalysis[3].response4;
this.res5=this.surveyQstAnalysis[3].response5;


this.res6=this.surveyQstAnalysis[3].response6;
this.res7=this.surveyQstAnalysis[3].response7;
this.res8=this.surveyQstAnalysis[3].response8;
this.res9=this.surveyQstAnalysis[3].response9;
this.res10=this.surveyQstAnalysis[3].response10;

this.total4=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart4',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}


/********************************* */


this.Qst5=this.surveyQstAnalysis[4].questText;
this.type5=this.surveyQstAnalysis[4].ansTypeEnum;
if(this.type5==1||this.type5==3)
{
this.res1=this.surveyQstAnalysis[4].response1;
this.res2=this.surveyQstAnalysis[4].response2;
this.total5=this.res1+this.res2;
this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart5',this.type5,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type5==2||this.type5==4||this.type5==6)
{
this.res1=this.surveyQstAnalysis[4].response1;
this.res2=this.surveyQstAnalysis[4].response2;
this.res3=this.surveyQstAnalysis[4].response3;
this.res4=this.surveyQstAnalysis[4].response4;
this.res5=this.surveyQstAnalysis[4].response5;

this.total5=this.res1+this.res2+this.res3+this.res4+this.res5;
this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart5',this.type5,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type5==5)
{
this.res1=this.surveyQstAnalysis[4].response1;
this.res2=this.surveyQstAnalysis[4].response2;
this.res3=this.surveyQstAnalysis[4].response3;
this.res4=this.surveyQstAnalysis[4].response4;
this.res5=this.surveyQstAnalysis[4].response5;


this.res6=this.surveyQstAnalysis[4].response6;
this.res7=this.surveyQstAnalysis[4].response7;
this.res8=this.surveyQstAnalysis[4].response8;
this.res9=this.surveyQstAnalysis[4].response9;
this.res10=this.surveyQstAnalysis[4].response10;

this.total5=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart5',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/************************************ */

this.Qst6=this.surveyQstAnalysis[5].questText;
this.type6=this.surveyQstAnalysis[5].ansTypeEnum;
if(this.type6==1||this.type6==3)
{
this.res1=this.surveyQstAnalysis[5].response1;
this.res2=this.surveyQstAnalysis[5].response2;
this.total6=this.res1+this.res2;
this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart6',this.type6,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type6==2||this.type6==4||this.type6==6)
{
this.res1=this.surveyQstAnalysis[5].response1;
this.res2=this.surveyQstAnalysis[5].response2;
this.res3=this.surveyQstAnalysis[5].response3;
this.res4=this.surveyQstAnalysis[5].response4;
this.res5=this.surveyQstAnalysis[5].response5;

this.total6=this.res1+this.res2+this.res3+this.res4+this.res5;
this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart6',this.type6,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type6==5)
{
this.res1=this.surveyQstAnalysis[5].response1;
this.res2=this.surveyQstAnalysis[5].response2;
this.res3=this.surveyQstAnalysis[5].response3;
this.res4=this.surveyQstAnalysis[5].response4;
this.res5=this.surveyQstAnalysis[5].response5;


this.res6=this.surveyQstAnalysis[5].response6;
this.res7=this.surveyQstAnalysis[5].response7;
this.res8=this.surveyQstAnalysis[5].response8;
this.res9=this.surveyQstAnalysis[5].response9;
this.res10=this.surveyQstAnalysis[5].response10;

this.total6=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart6',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}


/********************************* */

this.Qst7=this.surveyQstAnalysis[6].questText;
this.type7=this.surveyQstAnalysis[6].ansTypeEnum;
if(this.type7==1||this.type7==3)
{
this.res1=this.surveyQstAnalysis[6].response1;
this.res2=this.surveyQstAnalysis[6].response2;

this.total7=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart7',this.type7,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type7==2||this.type7==4||this.type7==6)
{
this.res1=this.surveyQstAnalysis[6].response1;
this.res2=this.surveyQstAnalysis[6].response2;
this.res3=this.surveyQstAnalysis[6].response3;
this.res4=this.surveyQstAnalysis[6].response4;
this.res5=this.surveyQstAnalysis[6].response5;

this.total7=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart7',this.type7,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type7==5)
{
this.res1=this.surveyQstAnalysis[6].response1;
this.res2=this.surveyQstAnalysis[6].response2;
this.res3=this.surveyQstAnalysis[6].response3;
this.res4=this.surveyQstAnalysis[6].response4;
this.res5=this.surveyQstAnalysis[6].response5;


this.res6=this.surveyQstAnalysis[6].response6;
this.res7=this.surveyQstAnalysis[6].response7;
this.res8=this.surveyQstAnalysis[6].response8;
this.res9=this.surveyQstAnalysis[6].response9;
this.res10=this.surveyQstAnalysis[6].response10;

this.total7=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart7',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/************************************** */

this.Qst8=this.surveyQstAnalysis[7].questText;
this.type8=this.surveyQstAnalysis[7].ansTypeEnum;
if(this.type8==1||this.type8==3)
{
this.res1=this.surveyQstAnalysis[7].response1;
this.res2=this.surveyQstAnalysis[7].response2;

this.total8=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart8',this.type8,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type8==2||this.type8==4||this.type8==6)
{
this.res1=this.surveyQstAnalysis[7].response1;
this.res2=this.surveyQstAnalysis[7].response2;
this.res3=this.surveyQstAnalysis[7].response3;
this.res4=this.surveyQstAnalysis[7].response4;
this.res5=this.surveyQstAnalysis[7].response5;

this.total8=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart8',this.type8,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type8==5)
{
this.res1=this.surveyQstAnalysis[7].response1;
this.res2=this.surveyQstAnalysis[7].response2;
this.res3=this.surveyQstAnalysis[7].response3;
this.res4=this.surveyQstAnalysis[7].response4;
this.res5=this.surveyQstAnalysis[7].response5;


this.res6=this.surveyQstAnalysis[7].response6;
this.res7=this.surveyQstAnalysis[7].response7;
this.res8=this.surveyQstAnalysis[7].response8;
this.res9=this.surveyQstAnalysis[7].response9;
this.res10=this.surveyQstAnalysis[7].response10;

this.total8=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart8',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/********************************* */


this.Qst9=this.surveyQstAnalysis[8].questText;
this.type9=this.surveyQstAnalysis[8].ansTypeEnum;
if(this.type9==1||this.type9==3)
{
this.res1=this.surveyQstAnalysis[8].response1;
this.res2=this.surveyQstAnalysis[8].response2;

this.total9=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart9',this.type9,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type9==2||this.type9==4||this.type9==6)
{
this.res1=this.surveyQstAnalysis[8].response1;
this.res2=this.surveyQstAnalysis[8].response2;
this.res3=this.surveyQstAnalysis[8].response3;
this.res4=this.surveyQstAnalysis[8].response4;
this.res5=this.surveyQstAnalysis[8].response5;

this.total9=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart9',this.type9,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type9==5)
{
this.res1=this.surveyQstAnalysis[8].response1;
this.res2=this.surveyQstAnalysis[8].response2;
this.res3=this.surveyQstAnalysis[8].response3;
this.res4=this.surveyQstAnalysis[8].response4;
this.res5=this.surveyQstAnalysis[8].response5;


this.res6=this.surveyQstAnalysis[8].response6;
this.res7=this.surveyQstAnalysis[8].response7;
this.res8=this.surveyQstAnalysis[8].response8;
this.res9=this.surveyQstAnalysis[8].response9;
this.res10=this.surveyQstAnalysis[8].response10;

this.total9=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart9',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/****************************** */


this.Qst10=this.surveyQstAnalysis[9].questText;
this.type10=this.surveyQstAnalysis[9].ansTypeEnum;
if(this.type10==1||this.type10==3)
{
this.res1=this.surveyQstAnalysis[9].response1;
this.res2=this.surveyQstAnalysis[9].response2;

this.total10=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart10',this.type10,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type10==2||this.type10==4||this.type10==6)
{
this.res1=this.surveyQstAnalysis[9].response1;
this.res2=this.surveyQstAnalysis[9].response2;
this.res3=this.surveyQstAnalysis[9].response3;
this.res4=this.surveyQstAnalysis[9].response4;
this.res5=this.surveyQstAnalysis[9].response5;

this.total10=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart10',this.type10,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type10==5)
{
this.res1=this.surveyQstAnalysis[9].response1;
this.res2=this.surveyQstAnalysis[9].response2;
this.res3=this.surveyQstAnalysis[9].response3;
this.res4=this.surveyQstAnalysis[9].response4;
this.res5=this.surveyQstAnalysis[9].response5;


this.res6=this.surveyQstAnalysis[9].response6;
this.res7=this.surveyQstAnalysis[9].response7;
this.res8=this.surveyQstAnalysis[9].response8;
this.res9=this.surveyQstAnalysis[9].response9;
this.res10=this.surveyQstAnalysis[9].response10;

this.total10=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart10',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/*************************** */

this.Qst11=this.surveyQstAnalysis[10].questText;
this.type11=this.surveyQstAnalysis[10].ansTypeEnum;
if(this.type11==1||this.type11==3)
{
this.res1=this.surveyQstAnalysis[10].response1;
this.res2=this.surveyQstAnalysis[10].response2;

this.total11=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart11',this.type11,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type11==2||this.type11==4||this.type11==6)
{
this.res1=this.surveyQstAnalysis[10].response1;
this.res2=this.surveyQstAnalysis[10].response2;
this.res3=this.surveyQstAnalysis[10].response3;
this.res4=this.surveyQstAnalysis[10].response4;
this.res5=this.surveyQstAnalysis[10].response5;

this.total11=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart11',this.type11,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type11==5)
{
this.res1=this.surveyQstAnalysis[10].response1;
this.res2=this.surveyQstAnalysis[10].response2;
this.res3=this.surveyQstAnalysis[10].response3;
this.res4=this.surveyQstAnalysis[10].response4;
this.res5=this.surveyQstAnalysis[10].response5;


this.res6=this.surveyQstAnalysis[10].response6;
this.res7=this.surveyQstAnalysis[10].response7;
this.res8=this.surveyQstAnalysis[10].response8;
this.res9=this.surveyQstAnalysis[10].response9;
this.res10=this.surveyQstAnalysis[10].response10;

this.total11=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart11',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/**************************** */

this.Qst12=this.surveyQstAnalysis[11].questText;
this.type12=this.surveyQstAnalysis[11].ansTypeEnum;
if(this.type12==1||this.type12==3)
{
this.res1=this.surveyQstAnalysis[11].response1;
this.res2=this.surveyQstAnalysis[11].response2;

this.total12=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart12',this.type12,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type12==2||this.type12==4||this.type12==6)
{
this.res1=this.surveyQstAnalysis[11].response1;
this.res2=this.surveyQstAnalysis[11].response2;
this.res3=this.surveyQstAnalysis[11].response3;
this.res4=this.surveyQstAnalysis[11].response4;
this.res5=this.surveyQstAnalysis[11].response5;

this.total12=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart12',this.type12,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type12==5)
{
this.res1=this.surveyQstAnalysis[11].response1;
this.res2=this.surveyQstAnalysis[11].response2;
this.res3=this.surveyQstAnalysis[11].response3;
this.res4=this.surveyQstAnalysis[11].response4;
this.res5=this.surveyQstAnalysis[11].response5;


this.res6=this.surveyQstAnalysis[11].response6;
this.res7=this.surveyQstAnalysis[11].response7;
this.res8=this.surveyQstAnalysis[11].response8;
this.res9=this.surveyQstAnalysis[11].response9;
this.res10=this.surveyQstAnalysis[11].response10;

this.total12=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart12',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}


/*********************************** */

this.Qst13=this.surveyQstAnalysis[12].questText;
this.type13=this.surveyQstAnalysis[12].ansTypeEnum;
if(this.type13==1||this.type13==3)
{
this.res1=this.surveyQstAnalysis[12].response1;
this.res2=this.surveyQstAnalysis[12].response2;

this.total13=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart13',this.type13,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type13==2||this.type13==4||this.type13==6)
{
this.res1=this.surveyQstAnalysis[12].response1;
this.res2=this.surveyQstAnalysis[12].response2;
this.res3=this.surveyQstAnalysis[12].response3;
this.res4=this.surveyQstAnalysis[12].response4;
this.res5=this.surveyQstAnalysis[12].response5;

this.total13=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart13',this.type13,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type13==5)
{
this.res1=this.surveyQstAnalysis[12].response1;
this.res2=this.surveyQstAnalysis[12].response2;
this.res3=this.surveyQstAnalysis[12].response3;
this.res4=this.surveyQstAnalysis[12].response4;
this.res5=this.surveyQstAnalysis[12].response5;


this.res6=this.surveyQstAnalysis[12].response6;
this.res7=this.surveyQstAnalysis[12].response7;
this.res8=this.surveyQstAnalysis[12].response8;
this.res9=this.surveyQstAnalysis[12].response9;
this.res10=this.surveyQstAnalysis[12].response10;

this.total13=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart13',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}


/******************************* */

this.Qst14=this.surveyQstAnalysis[13].questText;
this.type14=this.surveyQstAnalysis[13].ansTypeEnum;
if(this.type14==1||this.type14==3)
{
this.res1=this.surveyQstAnalysis[13].response1;
this.res2=this.surveyQstAnalysis[13].response2;

this.total14=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart14',this.type14,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type14==2||this.type14==4||this.type14==6)
{
this.res1=this.surveyQstAnalysis[13].response1;
this.res2=this.surveyQstAnalysis[13].response2;
this.res3=this.surveyQstAnalysis[13].response3;
this.res4=this.surveyQstAnalysis[13].response4;
this.res5=this.surveyQstAnalysis[13].response5;

this.total14=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart14',this.type14,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type14==5)
{
this.res1=this.surveyQstAnalysis[13].response1;
this.res2=this.surveyQstAnalysis[13].response2;
this.res3=this.surveyQstAnalysis[13].response3;
this.res4=this.surveyQstAnalysis[13].response4;
this.res5=this.surveyQstAnalysis[13].response5;


this.res6=this.surveyQstAnalysis[13].response6;
this.res7=this.surveyQstAnalysis[13].response7;
this.res8=this.surveyQstAnalysis[13].response8;
this.res9=this.surveyQstAnalysis[13].response9;
this.res10=this.surveyQstAnalysis[13].response10;

this.total14=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart14',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/********************************** */


this.Qst15=this.surveyQstAnalysis[14].questText;
this.type15=this.surveyQstAnalysis[14].ansTypeEnum;
if(this.type15==1||this.type15==3)
{
this.res1=this.surveyQstAnalysis[14].response1;
this.res2=this.surveyQstAnalysis[14].response2;

this.total15=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart15',this.type15,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type15==2||this.type15==4||this.type15==6)
{
this.res1=this.surveyQstAnalysis[14].response1;
this.res2=this.surveyQstAnalysis[14].response2;
this.res3=this.surveyQstAnalysis[14].response3;
this.res4=this.surveyQstAnalysis[14].response4;
this.res5=this.surveyQstAnalysis[14].response5;

this.total15=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart15',this.type15,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type15==5)
{
this.res1=this.surveyQstAnalysis[14].response1;
this.res2=this.surveyQstAnalysis[14].response2;
this.res3=this.surveyQstAnalysis[14].response3;
this.res4=this.surveyQstAnalysis[14].response4;
this.res5=this.surveyQstAnalysis[14].response5;


this.res6=this.surveyQstAnalysis[14].response6;
this.res7=this.surveyQstAnalysis[14].response7;
this.res8=this.surveyQstAnalysis[14].response8;
this.res9=this.surveyQstAnalysis[14].response9;
this.res10=this.surveyQstAnalysis[14].response10;

this.total15=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart15',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}


/*********************** */

this.Qst16=this.surveyQstAnalysis[15].questText;
this.type16=this.surveyQstAnalysis[15].ansTypeEnum;
if(this.type16==1||this.type16==3)
{
this.res1=this.surveyQstAnalysis[15].response1;
this.res2=this.surveyQstAnalysis[15].response2;

this.total16=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart16',this.type16,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type16==2||this.type16==4||this.type16==6)
{
this.res1=this.surveyQstAnalysis[15].response1;
this.res2=this.surveyQstAnalysis[15].response2;
this.res3=this.surveyQstAnalysis[15].response3;
this.res4=this.surveyQstAnalysis[15].response4;
this.res5=this.surveyQstAnalysis[15].response5;

this.total16=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart16',this.type16,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type16==5)
{
this.res1=this.surveyQstAnalysis[15].response1;
this.res2=this.surveyQstAnalysis[15].response2;
this.res3=this.surveyQstAnalysis[15].response3;
this.res4=this.surveyQstAnalysis[15].response4;
this.res5=this.surveyQstAnalysis[15].response5;


this.res6=this.surveyQstAnalysis[15].response6;
this.res7=this.surveyQstAnalysis[15].response7;
this.res8=this.surveyQstAnalysis[15].response8;
this.res9=this.surveyQstAnalysis[15].response9;
this.res10=this.surveyQstAnalysis[15].response10;

this.total16=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart16',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/*************************** */


this.Qst17=this.surveyQstAnalysis[16].questText;
this.type17=this.surveyQstAnalysis[16].ansTypeEnum;
if(this.type17==1||this.type17==3)
{
this.res1=this.surveyQstAnalysis[16].response1;
this.res2=this.surveyQstAnalysis[16].response2;

this.total17=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart17',this.type17,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type17==2||this.type17==4||this.type17==6)
{
this.res1=this.surveyQstAnalysis[16].response1;
this.res2=this.surveyQstAnalysis[16].response2;
this.res3=this.surveyQstAnalysis[16].response3;
this.res4=this.surveyQstAnalysis[16].response4;
this.res5=this.surveyQstAnalysis[16].response5;

this.total17=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart17',this.type17,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type17==5)
{
this.res1=this.surveyQstAnalysis[16].response1;
this.res2=this.surveyQstAnalysis[16].response2;
this.res3=this.surveyQstAnalysis[16].response3;
this.res4=this.surveyQstAnalysis[16].response4;
this.res5=this.surveyQstAnalysis[16].response5;


this.res6=this.surveyQstAnalysis[16].response6;
this.res7=this.surveyQstAnalysis[16].response7;
this.res8=this.surveyQstAnalysis[16].response8;
this.res9=this.surveyQstAnalysis[16].response9;
this.res10=this.surveyQstAnalysis[16].response10;

this.total17=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart17',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}



/******************* */

this.Qst18=this.surveyQstAnalysis[17].questText;
this.type18=this.surveyQstAnalysis[17].ansTypeEnum;
if(this.type18==1||this.type18==3)
{
this.res1=this.surveyQstAnalysis[17].response1;
this.res2=this.surveyQstAnalysis[17].response2;

this.total18=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart18',this.type18,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type18==2||this.type18==4||this.type18==6)
{
this.res1=this.surveyQstAnalysis[17].response1;
this.res2=this.surveyQstAnalysis[17].response2;
this.res3=this.surveyQstAnalysis[17].response3;
this.res4=this.surveyQstAnalysis[17].response4;
this.res5=this.surveyQstAnalysis[17].response5;

this.total18=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart18',this.type18,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type18==5)
{
this.res1=this.surveyQstAnalysis[17].response1;
this.res2=this.surveyQstAnalysis[17].response2;
this.res3=this.surveyQstAnalysis[17].response3;
this.res4=this.surveyQstAnalysis[17].response4;
this.res5=this.surveyQstAnalysis[17].response5;


this.res6=this.surveyQstAnalysis[17].response6;
this.res7=this.surveyQstAnalysis[17].response7;
this.res8=this.surveyQstAnalysis[17].response8;
this.res9=this.surveyQstAnalysis[17].response9;
this.res10=this.surveyQstAnalysis[17].response10;


this.total18=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart18',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/******************* */

this.Qst19=this.surveyQstAnalysis[18].questText;
this.type19=this.surveyQstAnalysis[18].ansTypeEnum;
if(this.type19==1||this.type19==3)
{
this.res1=this.surveyQstAnalysis[18].response1;
this.res2=this.surveyQstAnalysis[18].response2;

this.total19=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart19',this.type19,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type19==2||this.type19==4||this.type19==6)
{
this.res1=this.surveyQstAnalysis[19].response1;
this.res2=this.surveyQstAnalysis[19].response2;
this.res3=this.surveyQstAnalysis[19].response3;
this.res4=this.surveyQstAnalysis[19].response4;
this.res5=this.surveyQstAnalysis[19].response5;

this.total19=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart19',this.type19,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type19==5)
{
this.res1=this.surveyQstAnalysis[18].response1;
this.res2=this.surveyQstAnalysis[18].response2;
this.res3=this.surveyQstAnalysis[18].response3;
this.res4=this.surveyQstAnalysis[18].response4;
this.res5=this.surveyQstAnalysis[18].response5;


this.res6=this.surveyQstAnalysis[18].response6;
this.res7=this.surveyQstAnalysis[18].response7;
this.res8=this.surveyQstAnalysis[18].response8;
this.res9=this.surveyQstAnalysis[18].response9;
this.res10=this.surveyQstAnalysis[18].response10;

this.total19=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart19',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}


/************************ */

this.Qst20=this.surveyQstAnalysis[19].questText;
this.type20=this.surveyQstAnalysis[19].ansTypeEnum;
if(this.type20==1||this.type20==3)
{
this.res1=this.surveyQstAnalysis[19].response1;
this.res2=this.surveyQstAnalysis[19].response2;

this.total20=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart19',this.type20,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type20==2||this.type20==4||this.type20==6)
{
this.res1=this.surveyQstAnalysis[19].response1;
this.res2=this.surveyQstAnalysis[19].response2;
this.res3=this.surveyQstAnalysis[19].response3;
this.res4=this.surveyQstAnalysis[19].response4;
this.res5=this.surveyQstAnalysis[19].response5;

this.total20=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart19',this.type19,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type19==5)
{
this.res1=this.surveyQstAnalysis[19].response1;
this.res2=this.surveyQstAnalysis[19].response2;
this.res3=this.surveyQstAnalysis[19].response3;
this.res4=this.surveyQstAnalysis[19].response4;
this.res5=this.surveyQstAnalysis[19].response5;


this.res6=this.surveyQstAnalysis[19].response6;
this.res7=this.surveyQstAnalysis[19].response7;
this.res8=this.surveyQstAnalysis[19].response8;
this.res9=this.surveyQstAnalysis[19].response9;
this.res10=this.surveyQstAnalysis[19].response10;

this.total20=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart19',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}


/******************* */

this.Qst20=this.surveyQstAnalysis[20].questText;
this.type20=this.surveyQstAnalysis[20].ansTypeEnum;
if(this.type20==1||this.type20==3)
{
this.res1=this.surveyQstAnalysis[19].response1;
this.res2=this.surveyQstAnalysis[19].response2;

this.total21=this.res1+this.res2;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

   /* if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart('pieChart20',this.type20,this.res1,this.res2, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type20==2||this.type20==4||this.type20==6)
{
this.res1=this.surveyQstAnalysis[19].response1;
this.res2=this.surveyQstAnalysis[19].response2;
this.res3=this.surveyQstAnalysis[19].response3;
this.res4=this.surveyQstAnalysis[19].response4;
this.res5=this.surveyQstAnalysis[19].response5;

this.total21=this.res1+this.res2+this.res3+this.res4+this.res5;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }
*/
    this.renderChart55StartOrFaces('pieChart20',this.type20,this.res1,this.res2,this.res3,
    this.res4,this.res5
    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}
else if(this.type20==5)
{
this.res1=this.surveyQstAnalysis[19].response1;
this.res2=this.surveyQstAnalysis[19].response2;
this.res3=this.surveyQstAnalysis[19].response3;
this.res4=this.surveyQstAnalysis[19].response4;
this.res5=this.surveyQstAnalysis[19].response5;


this.res6=this.surveyQstAnalysis[19].response6;
this.res7=this.surveyQstAnalysis[19].response7;
this.res8=this.surveyQstAnalysis[19].response8;
this.res9=this.surveyQstAnalysis[19].response9;
this.res10=this.surveyQstAnalysis[19].response10;

this.total21=this.res1+this.res2+this.res3+this.res4+this.res5+
this.res6+this.res7+this.res8+this.res9+this.res10;

this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

  /*  if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }*/

    this.renderChartFromOneToTen('pieChart20',5,this.res1,this.res2,this.res3,
    this.res4,this.res5,
    this.res6,this.res7,
    this.res8,this.res9,this.res10

    , 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);
}

/*this.themeSubscription = this.themeModeService.themeMode.subscribe(
  (theme) => {
    this.labelColor =
      theme === 'default'
        ? 'rgba(10, 10, 10, 0.7)'
        : 'rgba(255, 255, 255, 0.7)';

    if (this.chartInstances.length > 0) {
      this.chartInstances.forEach((chart) => chart.destroy());
      this.chartInstances = [];
    }

    this.renderChart('pieChart',this.type1, 'pie');
    //this.renderChart1('pieChart',"e", 'pie');
    //this.renderChart1('lineChart',"w", 'line');
  }
);*/
    });


 

  }

  renderChart(id: string,type:number,res1:number,res2:number, chartType: keyof ChartTypeRegistry) {
    console.log(id);
    if(type==1)
    {
    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          'نعم',
          'لا',
      
       
        ],
        datasets: [
          {
            label: 'العدد',
            data: [res1, res2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
             // 'rgba(255, 205, 86, 0.8)',
              //'rgba(75, 192, 192, 0.8)',
          
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
      /*options: {
        scales: {
          y: {
            ticks: {
              color: this.labelColor,
            },
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
          },
        },
      },*/
    });

    this.chartInstances.push(chart);
  }

  if(type==3)
  {
  const chart = new Chart(id, {
    type: chartType,
    data: {
      labels: [
        'اعجبنى',
        'لم يعجبنى',
    
     
      ],
      datasets: [
        {
          label: 'العدد',
          data: [res1, res2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
           // 'rgba(255, 205, 86, 0.8)',
            //'rgba(75, 192, 192, 0.8)',
        
          ],
          borderWidth: id === 'lineChart' ? 2 : 1,
          borderRadius: 6,
          borderColor: id === 'lineChart' ? this.labelColor : 'white',
          tension: id === 'lineChart' && 0.1,
        },
      ],
    },
    /*options: {
      scales: {
        y: {
          ticks: {
            color: this.labelColor,
          },
        },
        x: {
          ticks: {
            color: this.labelColor,
          },
        },
      },
    },*/
  });

  this.chartInstances.push(chart);
}
  else
  {
    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
       
        ],
        datasets: [
          {
            label: 'Income',
            data: [65, 59, 80, 81],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 205, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
          
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
      /*options: {
        scales: {
          y: {
            ticks: {
              color: this.labelColor,
            },
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
          },
        },
      },*/
    });

    this.chartInstances.push(chart);
  }
  }

  renderChart55StartOrFaces(id: string,type:number,res1:number,res2:number,res3:number,res4:number,res5:number, chartType: keyof ChartTypeRegistry) {
    console.log(id);
    if(type==2)
    {
    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          'Start-1',
          'Start-2',
      
          'Start-3',
          'Start-4',
          'Start-5',
       
        ],
        datasets: [
          {
            label: 'العدد',
            data: [res1, res2,res3,res4,res5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 205, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)'
          
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
      /*options: {
        scales: {
          y: {
            ticks: {
              color: this.labelColor,
            },
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
          },
        },
      },*/
    });

    this.chartInstances.push(chart);
  }
  else   if(type==4)
  {
  const chart = new Chart(id, {
    type: chartType,
    data: {
      labels: [
        'غير راضى تماماً',
        'غير راضى',
    
        'راضى',
        'راضى جدا',
        'راضى جدا جدا',
     
      ],
      datasets: [
        {
          label: 'العدد',
          data: [res1, res2,res3,res4,res5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)'
        
          ],
          borderWidth: id === 'lineChart' ? 2 : 1,
          borderRadius: 6,
          borderColor: id === 'lineChart' ? this.labelColor : 'white',
          tension: id === 'lineChart' && 0.1,
        },
      ],
    },
    /*options: {
      scales: {
        y: {
          ticks: {
            color: this.labelColor,
          },
        },
        x: {
          ticks: {
            color: this.labelColor,
          },
        },
      },
    },*/
  });

  this.chartInstances.push(chart);
}

else   if(type==6)
{
const chart = new Chart(id, {
  type: chartType,
  data: {
    labels: [
      '0'
      ,
      '25%',
  
      '50%',
      '75%',
      '100%',
   
    ],
    datasets: [
      {
        label: '0-100',
        data: [res1, res2,res3,res4,res5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(255, 205, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)'
      
        ],
        borderWidth: id === 'lineChart' ? 2 : 1,
        borderRadius: 6,
        borderColor: id === 'lineChart' ? this.labelColor : 'white',
        tension: id === 'lineChart' && 0.1,
      },
    ],
  },
  /*options: {
    scales: {
      y: {
        ticks: {
          color: this.labelColor,
        },
      },
      x: {
        ticks: {
          color: this.labelColor,
        },
      },
    },
  },*/
});

this.chartInstances.push(chart);
}
  else
  {
    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
       
        ],
        datasets: [
          {
            label: 'Income',
            data: [65, 59, 80, 81],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 205, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
          
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
      /*options: {
        scales: {
          y: {
            ticks: {
              color: this.labelColor,
            },
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
          },
        },
      },*/
    });

    this.chartInstances.push(chart);
  }
  }

  renderChartFromOneToTen(id: string,type:number,res1:number,res2:number,res3:number,res4:number,
    res5:number,res6:number,res7:number,res8:number,res9:number,res10:number, chartType: keyof ChartTypeRegistry) {
    console.log(id);
    if(type==5)
    {
    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          '10',
          '20',
      
          '30',
          '40',
          '50',
          '60',
          '70',
          '80',
         '90', 
         '100'
       
        ],
        datasets: [
          {
            label: 'العدد',
            data: [res1, res2,res3,res4,res5,res6,res7,res8,res9,res10],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 205, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
          
              'rgba(153, 105, 15, 0.8)',
              'rgba(45, 106, 255, 0.8)',
              'rgba(100, 102, 255, 0.8)',
              'rgba(80, 102, 255, 0.8)',
              'rgba(180, 75, 172, 0.8)',

            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
      /*options: {
        scales: {
          y: {
            ticks: {
              color: this.labelColor,
            },
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
          },
        },
      },*/
    });

    this.chartInstances.push(chart);
  }
  else   if(type==4)
  {
  const chart = new Chart(id, {
    type: chartType,
    data: {
      labels: [
        'غير راضى تماماً',
        'غير راضى',
    
        'راضى',
        'راضى جدا',
        'راضى جدا جدا',
     
      ],
      datasets: [
        {
          label: 'العدد',
          data: [res1, res2,res3,res4,res5],
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)'
        
          ],
          borderWidth: id === 'lineChart' ? 2 : 1,
          borderRadius: 6,
          borderColor: id === 'lineChart' ? this.labelColor : 'white',
          tension: id === 'lineChart' && 0.1,
        },
      ],
    },
    /*options: {
      scales: {
        y: {
          ticks: {
            color: this.labelColor,
          },
        },
        x: {
          ticks: {
            color: this.labelColor,
          },
        },
      },
    },*/
  });

  this.chartInstances.push(chart);
}
  else
  {
    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
       
        ],
        datasets: [
          {
            label: 'Income',
            data: [65, 59, 80, 81],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 205, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
          
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
      /*options: {
        scales: {
          y: {
            ticks: {
              color: this.labelColor,
            },
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
          },
        },
      },*/
    });

    this.chartInstances.push(chart);
  }
  }
  renderChart1(id: string,qstId:string, chartType: keyof ChartTypeRegistry) {
 
     console.log(id);

     
    // console.log("PiCahert="+this.TotalNoOfParcels);
 
     const chart = new Chart('pieChart', {
       type: chartType,
       data: {
         labels: [
    ,
           'شاغرة',
           'ممنوحة',
           'تحت الإجراء',
           'إزدواجية منح',
         ],
         datasets: [
           {
             label: 'العدد',
          /*  data: [this.TotalNoOfNotGrantedParcels, this.TotalNoOfGrantedParcels, this.TotalNoOfUnderProcessGrantedParcels
               ,this.TotalNoOfDuplicatedGrantedParcels],*/
              data: [50, 30, 20
                 ,50],
 
             backgroundColor: [
             //  'rgba(255, 99, 132, 0.8)',
               //'rgba(255, 159, 64, 0.8)',
             //  'rgba(255, 205, 86, 0.8)',
               'rgba(0, 170,184)',
 
              // 'rgba(75, 192, 192, 0.8)',
               'rgba(54, 162, 235, 0.8)',
               'rgba(153, 102, 255, 0.8)',
               'rgba(201, 203, 207, 0.8)',
             ],
            /* borderWidth: id === 'lineChart' ? 2 : 1,
             borderRadius: 6,
             borderColor: id === 'lineChart' ? this.labelColor : 'white',
             tension: id === 'lineChart' && 0.1,*/
           },
         ],
       },
       /*options: {
         scales: {
           y: {
             ticks: {
               color: this.labelColor,
             },
           },
           x: {
             ticks: {
               color: this.labelColor,
             },
           },
         },
       },*/
     });
 
     this.chartInstances.push(chart);
   } 
}
