import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, ChartTypeRegistry, registerables } from 'chart.js';
import { map, Observable, of, Subscription } from 'rxjs';
import { ThemeModeService } from '../../components/navbar/theme-mode.service';
import { NgForm } from '@angular/forms';
import { StartegicGoalService } from '../../services/startegicGoals.service';
import { MilestoneModel } from '../../models/Milestone/Milestone.model';
import { StartegicGoalsModel } from '../../models/StrategicGoals/StrategicGoals.model';
//import { DashboardDtoModel } from '../../models/Dashboard/DashboardPrecentageDto.model';
import { DashboardService } from '../../services/dashboard.service';
import { StatisticsCountmodel } from '../../models/Dashboard/StatisticsCount.model';
import { DashboardDtoModel } from '../../models/Dashboard/dashboardDto.model';
import { DashboardPrecentageDtoModel } from '../../models/Dashboard/DashboardPrecentageDto.model';
import { RoleService } from '../../services/role.service';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute, Router } from '@angular/router';
import { MilestoneService } from '../../services/milestone.service';
import { DirectiveGoalService } from '../../services/directiveGoals.service';
import { DepartmentService } from '../../services/department.service';
import { EmployeeService } from '../../services/employee.service';
import { DirectiveGoalModel } from '../../models/DirectiveGoals/DirectiveGoals.model';
import { SurveyModel } from '../../models/Survey/Survey.model';
import { ServiceModel } from '../../models/Service/Service.model';
import { employee } from '../../models/Employee/Employee.model';
import { DepartmentModel } from '../../models/Departments/Department.model';
import { ServicesService } from '../../services/services.service';
import { SurveyService } from '../../services/Survey.service';
@Component({
  selector: 'app-charts-report',
  templateUrl: './charts-report.component.html',
  styleUrls: ['./charts-report.component.scss']
})
export class ChartsReportComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  selectedFilter: string = 'أهداف الإمارة';
  //gaugeValueStrategic=this.sta
  gaugeValueSurvey = 77.3;

  gaugeValue = 28.3;
  renderGauge = true;
  gaugeMarkers = {
    '10': {
      color: 'blue',
      type: 'triangle',
      size: 1,
      label: '10',
      font: '10px arial',
      isDark: true,
    },
    '20': {
      color: '#00ff00',
      type: 'line',
      size: 1,
      label: '20',
      font: '10px arial',
      isDark: false,
    },
    '30': {
      color: '#00ff00',
      type: 'line',
      size: 1,
      label: '30',
      font: '10px arial',
      isDark: true,
    },
    '40': {
      color: '#00ff00',
      type: 'line',
      size: 1,
      label: '40',
      font: '10px arial',
      isDark: false,
    },
    '50': {
      color: '#00ff00',
      type: 'line',
      size: 1,
      label: '50',
      font: '10px arial',
      isDark: true,
    },
    '60': {
      color: '#00ff00',
      type: 'line',
      size: 1,
      label: '60',
      font: '10px arial',
      isDark: false,
    },
    '70': {
      color: '#00ff00',
      type: 'line',
      size: 1,
      label: '70',
      font: '10px arial',
      isDark: true,
    },
    '80': {
      color: '#00ff00',
      type: 'line',
      size: 1,
      label: '80',
      font: '10px arial',
      isDark: false,
    },
    '90': {
      color: '#00ff00',
      type: 'line',
      size: 1,
      label: '90',
      font: '10px arial',
      isDark: true,
    },
  };
  thresholdConfig = {
    '0': { color: 'red', bgOpacity: 0.3 },
    '40': { color: 'orange', bgOpacity: 0.3 },
    '75.5': { color: 'green', bgOpacity: 0.3 },
  };
  chartInstances: Chart[] = [];
  themeSubscription: Subscription;
  labelColor: string;
  options: string[];
  filteredOptions$: Observable<string[]>;
  filteredOptions1$: Observable<DashboardDtoModel[]>;

  filteredOptions2$: DashboardDtoModel[] = [];
  milestone: MilestoneModel[] = [];
  strategiGoals: StartegicGoalsModel[] = [];
  DashboardDto: DashboardDtoModel[] = [];
  DashboardDto1: DashboardDtoModel[] = [];

  statisticsCountmodel: StatisticsCountmodel;
  dashboardStaticticsPrect: DashboardPrecentageDtoModel;
  fromDate: Date;
  toDate: Date;
  surveyCount: number;
  serviceCount: number;
  directiveCount: number;
  milestoneCount: number;
  strategicCount: number;

  ////// Dashboard //////

  strategicPrec: number;
  milestonePrec: number;
  directivePrec: number;
  servicePrec: number;
  surveyPrec: number;

  @ViewChild('autoInput') input: ElementRef;


  constructor(
    private themeModeService: ThemeModeService,
    private cdr: ChangeDetectorRef,
    private startegicGoalService: StartegicGoalService,
    private dashboardService: DashboardService,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router,
    private milestoneService: MilestoneService,
    private directiveGoalService: DirectiveGoalService,
    private departmentService: DepartmentService,
    private empService: EmployeeService,

    private service: ServicesService,
    private survey:SurveyService

  ) {
    Chart.register(...registerables);

    if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
    this.router.navigateByUrl('/auth');
    //if (translate.currentLang == "ar") this.dir = "rtl";
  }
  StrategicView: boolean = false;
  MileStoneView: boolean = false;
  DirectiveView: boolean = false;
  HideStartegic: boolean = false;
  HideAmera: boolean = false;
  HidDire: boolean = false;
  viewSome: boolean;
  hiddenForPrint: boolean = false;;

  ngOnInit(): void {

    this.roleService
      .getActionByRoleId(localStorage.getItem('RoleId'), 'Strategic-Statisics')
      .subscribe((res) => {
        this.StrategicView = res.entity.view;
      });
    this.roleService
      .getActionByRoleId(localStorage.getItem('RoleId'), 'Milestone-Statisics')
      .subscribe((res) => {
        this.MileStoneView = res.entity.view;
      });
    this.roleService
      .getActionByRoleId(localStorage.getItem('RoleId'), 'Directive-Statisics')
      .subscribe((res) => {
        this.DirectiveView = res.entity.view;
      });
    if (this.StrategicView == false) this.HideStartegic = true;
    if (this.MileStoneView == false) this.HideAmera = true;
    if (this.DirectiveView == false) this.HidDire = true;
    else this.viewSome = true;
    console.log(
      'ss' + this.StrategicView + this.MileStoneView + this.DirectiveView
    );
    this.options = ['All', 'Option 1', 'Option 2', 'Option 3'];
    this.filteredOptions$ = of(this.options);

    this.dashboardService.getAllCriteriaForSearch(1).subscribe((res) => {
      // this.DashboardDto = res;
      this.DashboardDto = res;
    });
    this.dashboardService.getStasticsCount().subscribe((res) => {
      // this.DashboardDto = res;
      this.statisticsCountmodel = res.entity;
      this.surveyCount = res.entity.noOfParticipantsForSurvey;
      this.serviceCount = res.entity.noOfParticipantsForService;
      this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
      this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
      this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
    });

    //*** Dashboard Precentage ***////

    this.dashboardService.getStasticsDashboardPrecentage().subscribe((res) => {
      // this.DashboardDto = res;
      this.dashboardStaticticsPrect = res.entity;
      this.strategicPrec = res.entity.strategicPrecentage;
      this.milestonePrec = res.entity.milestonePrecentage;
      this.directivePrec = res.entity.directivePrecentage;
      this.servicePrec = res.entity.servicePrecentage;
      this.surveyPrec = res.entity.surveyPrecentage;

      console.log('Precentage Values are=' + res.entity.strategicPrecentage);
    });

    //this.filteredOptions1$=of(this.DashboardDto);
    this.themeSubscription = this.themeModeService.themeMode.subscribe(
      (theme) => {
        this.labelColor =
          theme === 'default'
            ? 'rgba(10, 10, 10, 0.7)'
            : 'rgba(255, 255, 255, 0.7)';

        Object.keys(this.gaugeMarkers).forEach((key) => {
          this.gaugeMarkers[key].color = theme === 'default' ? '#000' : '#fff';
        });
        this.renderGauge = false; // Destroy the gauge
        this.cdr.detectChanges(); // Force re-rendering
        this.renderGauge = true; // Re-create the gauthis.cdr.detectChanges();

        if (this.chartInstances.length > 0) {
          this.chartInstances.forEach((chart) => chart.destroy());
          this.chartInstances = [];
        }

        this.renderChart('pieChart', 'pie');
        this.renderChart('lineChart', 'line');
      }
    );
  }

  getStartDate(event) {
    console.log('FromDate= ' + event.target.value);
    this.fromDate = event.target.value;
  }
  getEndDate(event) {
    console.log('FromDate= ' + event.target.value);
    this.toDate = event.target.value;
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((optionValue) =>
      optionValue.toLowerCase().includes(filterValue)
    );
  }

  // getFilteredOptions(value: string): Observable<string[]> {
  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(map((filterString) => this.filter(filterString)));
  }
TypeStr:string;
  GetValueOfChecked(value) {
    console.log('Value Of radio button is ' + value);
    this.Type = value;
    console.log('Type is =' + this.Type);
    this.GetSearchCriterial(value);
    if(this.Type==1)
    this.TypeStr="هدف رؤية 2030";
    if(this.Type==2)
    this.TypeStr="هدف الإمارة";
    if(this.Type==3)
    this.TypeStr="الهدف العاجل"; 
    if(this.Type==4)
    this.TypeStr="الخدمة";
    if(this.Type==5)
    this.TypeStr="الاستبيان";
    if(this.Type==6)
    this.TypeStr="الإدارة";
    if(this.Type==7)
    this.TypeStr="الموظف";

    console.log("TypeStr= "+this.TypeStr);
  }
  Type: number = 1;
  GetSearchCriterial(Type: number) {
    this.dashboardService.getAllCriteriaForSearch(Type).subscribe((res) => {
      // this.DashboardDto = res;
      this.DashboardDto = res;
      console.log('FilerOption=' + this.DashboardDto);
    });
  }
  SearchVal:string;
  StrategicDto:StartegicGoalsModel;
  MilestoneDto:MilestoneModel;
DirectiveGoal:DirectiveGoalModel;
SurveyDto:SurveyModel;
ServiceDto:ServiceModel;
Emp:employee;
Dept:DepartmentModel;
  selectChangeHandler(value: any) {
    this.Id = value;
    console.log('ID= ' + value);
    if(this.Type==1)
    {
      this.startegicGoalService.getById(this.Id).subscribe((res) => {
        this.StrategicDto= res.entity;
        this.SearchVal=res.entity.strategicGoalName;
        this.TypeStr="هدف رؤية 2030";

      });
    }
    if(this.Type==2)
    {
      this.milestoneService.getById(this.Id).subscribe((res) => {
        this.MilestoneDto= res.entity;
        this.SearchVal=res.entity.milestoneName;
        this.TypeStr="هدف الإمارة";

      });
    }
    if(this.Type==3)
    {
      this.directiveGoalService.getById(this.Id).subscribe((res) => {
        this.DirectiveGoal= res.entity;
        this.SearchVal=res.entity.directiveGoal;
        this.TypeStr="الهدف العاجل"; 

      });
    }
    if(this.Type==4)
    {
      this.service.getById(this.Id).subscribe((res) => {
        this.ServiceDto= res.entity;
        this.SearchVal=res.entity.serviceName;
        this.TypeStr="الخدمة";

      });
    }
    if(this.Type==5)
    {
      this.survey.getById(this.Id).subscribe((res) => {
        this.SurveyDto= res.entity;
        this.SearchVal=res.entity.surveyName;
        this.TypeStr="الاستبيان";

      });
    }
    if(this.Type==6)
    {
      this.departmentService.getById(this.Id).subscribe((res) => {
        this.Dept= res.entity;
        this.SearchVal=res.entity.departmentName;
        this.TypeStr="الإدارة";

      });
    }
    if(this.Type==7)
    {
      this.empService.getById(this.Id).subscribe((res) => {
        this.Emp= res.entity;
        this.SearchVal=res.entity.name;
        this.TypeStr="الموظف";

      });
    }
  }
  Id: string;
  getStrategicGoals() {
    this.startegicGoalService
      .searchStartegicGoals({
        PageNumber: 1,
        PageSize: 1000,
      })
      .subscribe((res) => {
        this.strategiGoals = res.entity.entities;
      });
  }
  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(
      this.input.nativeElement.value
    );
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
    // this.filteredOptions1$ = this.getFilteredOptions($event);
  }

  onSubmit() {
    console.log(this.form.value);
    if (
      this.fromDate != null &&
      this.toDate != null &&
      this.Id == null &&
      this.Type == 1
    ) {
      this.dashboardService
        .getStasticsCountInPeriod(this.fromDate, this.toDate)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageInPeriod(this.fromDate, this.toDate)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate == null &&
      this.toDate == null &&
      this.Type == 1
    ) {
      this.dashboardService
        .getStasticsCountForStrategic(this.Id)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageForStrategic(this.Id)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate == null &&
      this.toDate == null &&
      this.Type == 2
    ) {
      this.dashboardService
        .getStasticsCountForMilestone(this.Id)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getDashboardStatisticsForMilestone(this.Id)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate != null &&
      this.toDate != null &&
      this.Type == 2
    ) {
      this.dashboardService
        .getStasticsCountInPeriodForMilestone(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageForMilestoneInPeriod(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate == null &&
      this.toDate == null &&
      this.Type == 3
    ) {
      this.dashboardService
        .getStasticsCountForDirective(this.Id)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getDashboardStatisticsForDirective(this.Id)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate != null &&
      this.toDate != null &&
      this.Type == 3
    ) {
      this.dashboardService
        .getStasticsCountInPeriodForDirective(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageForDirectiveInPeriod(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate != null &&
      this.toDate != null &&
      this.Type == 1
    ) {
      this.dashboardService
        .getStasticsCountInPeriodForStrategic(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageForStrategicInPeriod(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate == null &&
      this.toDate == null &&
      this.Type == 4
    ) {
      this.dashboardService
        .getStasticsCountForService(this.Id)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .DashboardStatisticsForService(this.Id)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate != null &&
      this.toDate != null &&
      this.Type == 4
    ) {
      this.dashboardService
        .getStasticsCountInPeriodForService(this.Id, this.fromDate, this.toDate)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageForServiceInPeriod(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate == null &&
      this.toDate == null &&
      this.Type == 5
    ) {
      this.dashboardService
        .getStasticsCountForSurvey(this.Id)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .DashboardStatisticsForSurvey(this.Id)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate != null &&
      this.toDate != null &&
      this.Type == 5
    ) {
      this.dashboardService
        .getStasticsCountInPeriodForSurvey(this.Id, this.fromDate, this.toDate)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageForSurveyInPeriod(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate == null &&
      this.toDate == null &&
      this.Type == 6
    ) {
      this.dashboardService
        .getStasticsCountForDept(this.Id)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .DashboardStatisticsForDept(this.Id)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate != null &&
      this.toDate != null &&
      this.Type == 6
    ) {
      this.dashboardService
        .getStasticsCountInPeriodForDept(this.Id, this.fromDate, this.toDate)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageForDeptInPeriod(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate == null &&
      this.toDate == null &&
      this.Type == 7
    ) {
      this.dashboardService
        .getStasticsCountForEmployee(this.Id)
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .DashboardStatisticsForEmp(this.Id)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else if (
      this.Id != null &&
      this.fromDate != null &&
      this.toDate != null &&
      this.Type == 7
    ) {
      this.dashboardService
        .getStasticsCountInPeriodForEmployee(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          this.statisticsCountmodel = res.entity;
          this.surveyCount = res.entity.noOfParticipantsForSurvey;
          this.serviceCount = res.entity.noOfParticipantsForService;
          this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
          this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
          this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        });

      this.dashboardService
        .getStasticsDashboardPrecentageForEmpInPeriod(
          this.Id,
          this.fromDate,
          this.toDate
        )
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          console.log(
            'Precentage Values are=' + res.entity.strategicPrecentage
          );
        });
    } else {
      this.dashboardService.getStasticsCount().subscribe((res) => {
        // this.DashboardDto = res;
        this.statisticsCountmodel = res.entity;
        this.surveyCount = res.entity.noOfParticipantsForSurvey;
        this.serviceCount = res.entity.noOfParticipantsForService;
        this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
        this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
        this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
      });

      this.dashboardService
        .getStasticsDashboardPrecentageInPeriod(this.fromDate, this.toDate)
        .subscribe((res) => {
          // this.DashboardDto = res;
          this.dashboardStaticticsPrect = res.entity;
          this.strategicPrec = res.entity.strategicPrecentage;
          this.milestonePrec = res.entity.milestonePrecentage;
          this.directivePrec = res.entity.directivePrecentage;
          this.servicePrec = res.entity.servicePrecentage;
          this.surveyPrec = res.entity.surveyPrecentage;

          // console.log(
          //   'Precentage Values are=' + res.entity.strategicPrecentage
          // );
        });
    }
  }
  StartDate:string;
  EndDate:string;
Select:string;
  onReset() {
    this.selectedFilter='أهداف رؤية 2030';
    this.StartDate="";
    this.EndDate="";
    this.Select="";
    this.fromDate=null;
    this.toDate=null;
this.Id=null;

//this.DashboardDto=[];
this.dashboardService.getAllCriteriaForSearch(1).subscribe((res) => {
  // this.DashboardDto = res;
  this.DashboardDto = res;
});
    this.GetValueOfChecked(1);

   // this.form.reset();

     this.dashboardService.getAllCriteriaForSearch(1).subscribe((res) => {
      // this.DashboardDto = res;
      this.DashboardDto = res;
    });
    this.dashboardService.getStasticsCount().subscribe((res) => {
      // this.DashboardDto = res;
      this.statisticsCountmodel = res.entity;
      this.surveyCount = res.entity.noOfParticipantsForSurvey;
      this.serviceCount = res.entity.noOfParticipantsForService;
      this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
      this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
      this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
    });

    //*** Dashboard Precentage ***////

    this.dashboardService.getStasticsDashboardPrecentage().subscribe((res) => {
      // this.DashboardDto = res;
      this.dashboardStaticticsPrect = res.entity;
      this.strategicPrec = res.entity.strategicPrecentage;
      this.milestonePrec = res.entity.milestonePrecentage;
      this.directivePrec = res.entity.directivePrecentage;
      this.servicePrec = res.entity.servicePrecentage;
      this.surveyPrec = res.entity.surveyPrecentage;

      console.log('Precentage Values are=' + res.entity.strategicPrecentage);
    });


  }

  renderChart(id: string, chartType: keyof ChartTypeRegistry) {
    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Income',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(255, 159, 64, 0.8)',
              'rgba(255, 205, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(153, 102, 255, 0.8)',
              'rgba(201, 203, 207, 0.8)',
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
      options: {
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
      },
    });

    this.chartInstances.push(chart);
  }
  hidden(st)
  {
    this.hiddenForPrint=st;
  }
  repeated:boolean=false;
  public onSaveUsernameChanged(value:boolean){
   this.repeated=value;
   if(this.repeated==true)
   {
   this.hiddenForPrint=true;
   //this.printDiv("printTable");

   }
   else

  this.hiddenForPrint=false;

}
hiddenpdf:boolean=false;
 hiidenBtns()
{
  //return new Promise((resolve, reject) => {

  this.hiddenForPrint=true;
  //});


}
 Print()
{
//  console.log("HiddenForPrint="+this.hiddenForPrint);

  this.hiddenForPrint=true;
  //console.log("HiddenForPrint="+this.hiddenForPrint);
  this.printDiv();
  /*
  var observable = new Observable(res => {
    res.next(this.hiidenBtns());
    res.next(this.printDiv());
    res.next("Hello Rajesh");
  });
  observable.subscribe(console.log)
*/
 /* var promise = new Promise(res => {
    res(this.hiidenBtns());
    res(this.printDiv());
  });
  promise.then(console.log)
*/
  //await this.hiidenBtns();
  //this.hiddenForPrint=true;
   //this.printDiv();
  //this.hiidenBtns().then(res => this.printDiv("printTable"));
  //this.hiidenBtns().then(this.printDiv("printTable"));

 //await this.hiidenBtns();
 //this.hiddenForPrint=true;

 //await this.printDiv("printTable");

}
  printDiv() {
   //this.hiddenForPrint=true;

    const data = document.getElementById("printTable");
    if (data) {
      html2canvas(data).then(canvas => {
     //   this.hiddenForPrint=true;

       const imgWidth = 208;
      //  const imgWidth = 250;
  
        //const imgHeight = (canvas.height * imgWidth / canvas.width);
        const imgHeight = (canvas.height * imgWidth / canvas.width)-30;
        //-150;
     //   this.hiddenForPrint=true;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('Statistics.pdf');
      });
    }
  }
}