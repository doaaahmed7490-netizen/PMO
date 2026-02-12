import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart, ChartTypeRegistry, registerables,ChartConfiguration, ChartType  } from 'chart.js';

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

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
@ViewChild('barChart4Canvas') barChart4Canvas!: ElementRef;

  
  public pieChartType: ChartType = 'pie';
    chartInstances: Chart[] = [];
chartInstances1: { [key: string]: Chart } = {};



destroyChart(id: string) {
  if (this.chartInstances1[id]) {
    this.chartInstances1[id].destroy();
    delete this.chartInstances1[id];
  }
}

  themeSubscription: Subscription;
  // Pie Chart Data
  NotSelectPorject:boolean
  public pieChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Completed', 'In Progress', 'Pending', 'Delayed'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: [
        '#4CAF50',
        '#2196F3',
        '#FFC107',
        '#F44336'
      ]
    }]
  };

  // Optional Chart Options
  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };
LabelChart3:string;
  renderChart(id: string, chartType: keyof ChartTypeRegistry) {
  if(this.SelectID1>0)
  {
    console.log("SeleeeeeID"+this.SelectID1)
    this.LabelChart3='اعداد المهام طبقاً للحالة'
      const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          
          ' المهام المنتهية',
          ' المهام الجارية',
          ' المهام المتاخرة',
          ' المهام التى ستبداء قريبا'
       
        ],
        datasets: [
          {
            label: 'Number',
            data: [
              18,
              10,
              5,
              15
          
            ],
  
            backgroundColor: [
              '#826026',
          
             "#D9A85B",
              "#322682",
              "#9E9E9E"
    
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
        options: {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2, 
        }
    });
      
    this.chartInstances.push(chart);
  }
    else{
          console.log("SeleeeeeID"+this.SelectID1)

          this.LabelChart3='اعداد المشاريع طبقاً للحالة'

    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          
          ' المشاريع المنتهية',
          ' المشاريع الجارية',
          ' المشاريع المتاخرة',
          ' المشاريع التى ستبداء قريبا'
       
        ],
        datasets: [
          {
            label: 'Number',
            data: [
              30,
              10,
              7,
              15
          
            ],
  
            backgroundColor: [
             //'#A2782F',
              '#826026',
              //  'rgba(255, 99, 132, 0.8)',
              //'rgba(255, 159, 64, 0.8)',
              //  'rgba(255, 205, 86, 0.8)',
            //  'rgba(0, 170,184)',

              // 'rgba(75, 192, 192, 0.8)',
             // "#D0A65D",
             "#D9A85B",
              //"#322682",
              "#322682",
              "#9E9E9E"
             // 'rgba(54, 162, 235, 0.8)',
              //'rgba(153, 102, 255, 0.8)',
           //   'rgba(201, 203, 207, 0.8)'
           /*    'rgba(51, 51, 255)',
              'rgba(153, 153, 255)' */
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
        options: {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2, 
        }
    });
      
    this.chartInstances.push(chart);
    }
  }
  renderChart3(id: string, chartType: keyof ChartTypeRegistry) {
  
      console.log("welcome dddd")
    const chart = new Chart(id, {
      type: chartType,
      data: {
        labels: [
          
          'إجمالى الميزانية المخططة',
          'إجمالى التكلفة الفعلية',
          '(المتبقى)الرصيد',
       
        ],
        datasets: [
          {
            label: 'Number',
            data: [
              100,
              70,
              30
              
          
            ],
  
            backgroundColor: [
           "#488226",
           "#823226",
           "#267682"
            
            ],
            borderWidth: id === 'lineChart' ? 2 : 1,
            borderRadius: 6,
            borderColor: id === 'lineChart' ? this.labelColor : 'white',
            tension: id === 'lineChart' && 0.1,
          },
        ],
      },
        options: {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2, 
        }
    });
      
    this.chartInstances.push(chart);
  
  }
  
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


  ) {
    Chart.register(...registerables);

//  if(localStorage.getItem("token")==null||localStorage.getItem("token")=='')
  //this.router.navigateByUrl('/auth');
  }
  StrategicView: boolean = false;
  MileStoneView: boolean = false;
  DirectiveView: boolean = false;
  HideStartegic: boolean = false;
  HideAmera: boolean = false;
  HidDire: boolean = false;
  viewSome: boolean;
  hiddenForPrint: boolean = false;;
  Id: string;
  options1=[];
   selectedValue=''
  ngOnInit(): void {
   this.NotSelectPorject=true
     // Pie Chart Type
//  this.renderChart('pieChart', 'pie')
    this.themeSubscription = this.themeModeService.themeMode.subscribe(
          (theme) => {
            this.labelColor =
              theme === 'default'
                ? 'rgba(10, 10, 10, 0.7)'
                : 'rgba(255, 255, 255, 0.7)';

            if (this.chartInstances.length > 0) {
              this.chartInstances.forEach((chart) => chart.destroy());
              this.chartInstances = [];
            }

            this.renderChart('pieChart', 'pie');
            this.renderChart1('barChart', 'bar');

   this.renderChart2('barChart2', 'bar');
  this.renderChart3('pieChart2', 'pie');;
this.renderChart4('barChart4', 'bar');
                        });

        this.selectedValue = '';
  this.options1 = [
    { id: 0, label: 'الكل' },

    { id: 1, label: 'المشروع الاول' },
    { id: 2, label: 'المشروع الثانى' },
    { id: 3, label: 'المشروع الثالث' },
    { id: 4, label: 'المشروع الرابع' },
    { id: 5, label: 'المشروع الخامس' }
  ];
  this.Id=null;
 
/*
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
    else*/
       this.viewSome = true;
    console.log(
      'ss' + this.StrategicView + this.MileStoneView + this.DirectiveView
    );
    this.options = ['All', 'Option 1', 'Option 2', 'Option 3'];
    this.filteredOptions$ = of(this.options);
/*
    this.dashboardService.getAllCriteriaForSearch(1).subscribe((res) => {
      this.DashboardDto = res;
    });
    */
    /*
    this.dashboardService.getStasticsCount().subscribe((res) => {
      // this.DashboardDto = res;
     this.statisticsCountmodel = res.entity;
      this.surveyCount = res.entity.noOfParticipantsForSurvey;
      this.serviceCount = res.entity.noOfParticipantsForService;
      this.directiveCount = res.entity.noOfParticipantsForDirectiveGoal;
      this.milestoneCount = res.entity.noOfParticipantsForMileStoneGoal;
      this.strategicCount = res.entity.noOfParticipantsForStrategicGoal;
        
    });*/
       this.surveyCount = 100;
      this.serviceCount = 50;
      this.directiveCount = 30;
      this.milestoneCount = 20;
      this.strategicCount = 10;
    //*** Dashboard Precentage ***////
/*
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
    */
    this.strategicPrec = 60;
      this.milestonePrec = 40;
      this.directivePrec = 30;
      this.servicePrec = 80;
      this.surveyPrec = 20;
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

        //this.renderChart('pieChart', 'pie');
        //this.renderChart('lineChart', 'line');
      }
    );
  }
  public barChartConfig!: {
  type: ChartType,
  data: ChartConfiguration<'bar'>['data'],
  options: ChartConfiguration<'bar'>['options']
};
ngAfterViewInit() {
  this.renderChart('pieChart', 'pie');;
   this.renderChart1('barChart', 'bar');

   this.renderChart2('barChart2', 'bar');
  this.renderChart3('pieChart2', 'pie');;
     this.renderChart6('barChart6', 'bar');

    if (this.NotSelectPorject && !this.chartInstances['barChart4']) {
this.renderChart4('barChart4', 'bar');
this.renderChart5('barChart5', 'bar');
  }
}
LabelChart5:string;
  renderChart1(id: string, chartType: keyof ChartTypeRegistry) {
  
         if(this.SelectID1>0)
    {
      this.LabelChart5=" %نسبة انجاز المهام"
    const chart = new Chart(id, {
      type: chartType,
      data: {
       labels: ['Task A', 'Task B', 'Task C', 'Task D', 'Task E'],
        datasets: [
      {
        label: '%نسبة الانجاز',
        data: [100, 80, 40, 30,10],
       // backgroundColor: '#4CAF50',
       backgroundColor:'#264882'
      //  stack: 'total'

      }
      
    ]
      },
      options: {
         devicePixelRatio: 2,
          indexAxis: 'y',

        scales: {
          y: {
            ticks: {
              color: this.labelColor,
              
            
            },
           // stacked: true
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
            //stacked: true
          },
        },
      },
    });

    this.chartInstances.push(chart);
  }
    
    else
    {
    this.LabelChart5=" %نسبة انجاز المشاريع"
    const chart = new Chart(id, {
      type: chartType,
      data: {
       labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
        datasets: [
      {
        label: '%نسبة الانجاز',
        data: [100, 90, 60, 17,5],
       // backgroundColor: '#4CAF50',
       backgroundColor:'#264882'
      //  stack: 'total'

      }
      
    ]
      },
      options: {
         devicePixelRatio: 2,
          indexAxis: 'y',

        scales: {
          y: {
            ticks: {
              color: this.labelColor,
              
            
            },
           // stacked: true
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
            //stacked: true
          },
        },
      },
    });

    this.chartInstances.push(chart);
  }
}
labelChart9:string;
  renderChart6(id: string, chartType: keyof ChartTypeRegistry) {
  
         if(this.SelectID1>0)
    {
      this.labelChart9="المدة الزمنية للمهام"
    const chart = new Chart(id, {
      type: chartType,
      data: {
       labels: ['Task A', 'Task B', 'Task C', 'Task D', 'Task E'],
        datasets: [
      {
        label: 'المدة الزمنية (عدد الايام)',
        data: [30, 20, 18, 6,1],
       // backgroundColor: '#4CAF50',
              backgroundColor:'#267682'
      //  stack: 'total'

      }
      
    ]
      },
      options: {
         devicePixelRatio: 2,
          indexAxis: 'y',

        scales: {
          y: {
            ticks: {
              color: this.labelColor,
              
            
            },
           // stacked: true
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
            //stacked: true
          },
        },
      },
    });

    this.chartInstances.push(chart);
  }
    
    else
    {
    this.labelChart9="المدة الزمنية للمشاريع"
    const chart = new Chart(id, {
      type: chartType,
      data: {
       labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
        datasets: [
      {
        label: 'المدة الزمنية (عدد الشهور)',
        data: [12, 15, 24, 2,10],
       // backgroundColor: '#4CAF50',
      // backgroundColor:'#264882'
              backgroundColor:'#267682'

      //  stack: 'total'

      }
      
    ]
      },
      options: {
         devicePixelRatio: 2,
          indexAxis: 'y',

        scales: {
          y: {
            ticks: {
              color: this.labelColor,
              
            
            },
           // stacked: true
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
            //stacked: true
          },
        },
      },
    });

    this.chartInstances.push(chart);
  }
}
LabelChart7:string;
isShow:false
  renderChart4(id: string, chartType: keyof ChartTypeRegistry) {
  if(this.SelectID1>0)
    this.NotSelectPorject=false;
  else
  {
      const ctx = document.getElementById('barChart4') as HTMLCanvasElement;

    this.LabelChart7="إنجاز المشاريع طبقاً للمهام"

    console.log(id);
    const chart = new Chart(id, {
      type: chartType,
      data: {
       labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
        datasets: [
      {
        label: 'عدد المهام المنتهية',
        data: [10, 15, 8, 12,7],
       // backgroundColor: '#4CAF50',
       backgroundColor:'#826026',
        stack: 'total'

      },
      {
        label: 'عدد المهام الجارية',
        data: [5, 7, 6, 4,10],
       // backgroundColor: '#2196F3',
       backgroundColor:'#D9A85B',
              stack: 'total'

      },
      {
        label: 'عدد المهام المتاخر',
        data: [3, 4, 5, 2,5],
        //backgroundColor: '#FFC107',
        backgroundColor:'#322682',
              stack: 'total'

      },
       {
        label: 'عدد مهام ستبدء قريباً',
        data: [3, 4, 5, 2,6],
        //backgroundColor: '#FFC107',
        backgroundColor:'#9E9E9E',
              stack: 'total'

      }
    ]
      },
      options: {
         devicePixelRatio: 2,
          indexAxis: 'y',

        scales: {
          y: {
            ticks: {
              color: this.labelColor,
              
            
            },
            stacked: true
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
            stacked: true
          },
        },
      },
    });

  //  this.chartInstances.push(chart);
      this.chartInstances['barChart4'] = chart;

  }
}

  LabelChart6:string;
   renderChart2(id: string, chartType: keyof ChartTypeRegistry) {
    console.log(id);
    if(this.SelectID1>0)
    {
      this.LabelChart6="اعداد العاملين بكل مهمة"
    const chart = new Chart(id, {
      type: chartType,
      data: {
       labels: ['Task A', 'Task B', 'Task C', 'Task D', 'Task E'],
        datasets: [
      {
        label: 'عدد العناصر البشرية',
        data: [5, 11, 8, 2,1],
       // backgroundColor: '#4CAF50',
       backgroundColor:'#488226'
      //  stack: 'total'

      }
      
    ]
      },
      options: {
         devicePixelRatio: 2,
          indexAxis: 'y',

        scales: {
          y: {
            ticks: {
              color: this.labelColor,
              
            
            },
           // stacked: true
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
            //stacked: true
          },
        },
      },
    });

    this.chartInstances.push(chart);
  }
else    {
        this.LabelChart6="اعداد العاملين بكل مشروع"

    const chart = new Chart(id, {
      type: chartType,
      data: {
       labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
        datasets: [
      {
        label: 'عدد العناصر البشرية',
        data: [10, 15, 8, 12,7],
       // backgroundColor: '#4CAF50',
       backgroundColor:'#488226'
      //  stack: 'total'

      }
      
    ]
      },
      options: {
         devicePixelRatio: 2,
          indexAxis: 'y',

        scales: {
          y: {
            ticks: {
              color: this.labelColor,
              
            
            },
           // stacked: true
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
            //stacked: true
          },
        },
      },
    });

    this.chartInstances.push(chart);
  }
}
  LabelChart8:string;
   renderChart5(id: string, chartType: keyof ChartTypeRegistry) {
    console.log(id);
  
        this.LabelChart8="اعداد المشاريع طبقاً للموقع"

    const chart = new Chart(id, {
      type: chartType,
      data: {
       labels: ['جدة', 'الرياض', 'مكة', 'المدينة'],
        datasets: [
      {
        label: 'عدد المشاريع',
        data: [20, 7, 15, 4],
       // backgroundColor: '#4CAF50',
       backgroundColor:'#264882'
      //  stack: 'total'

      }
      
    ]
      },
      options: {
         devicePixelRatio: 2,
          indexAxis: 'y',

        scales: {
          y: {
            ticks: {
              color: this.labelColor,
              
            
            },
           // stacked: true
          },
          x: {
            ticks: {
              color: this.labelColor,
            },
            //stacked: true
          },
        },
      },
    });

    this.chartInstances.push(chart);
  
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

  GetValueOfChecked(value) {
        this.Type = 1;
/*
    console.log('Value Of radio button is ' + value);
    this.Type = value;
    console.log('Type is =' + this.Type);*/
    //this.GetSearchCriterial(1);
  }
  Type: number = 1;

  /*GetSearchCriterial(Type: number) {
    this.dashboardService.getAllCriteriaForSearch(Type).subscribe((res) => {
      this.DashboardDto = res;
      console.log('FilerOption=' + this.DashboardDto);
    });
  }
  selectChangeHandler(value: any) {
    this.Id = value;
    console.log('ID= ' + value);
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
  }*/
  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(
      this.input.nativeElement.value
    );
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
    // this.filteredOptions1$ = this.getFilteredOptions($event);
  }

 
  StartDate:string;
  EndDate:string;
Select:string;
 

  /* renderChart(id: string, chartType: keyof ChartTypeRegistry) {
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
  } */
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
selectedId1: any;
SelectID1:number
onSelect(id: any) {
  this.selectedId1 = id;
  this.SelectID1=id;
  if(id==0)
  {
       this.NotSelectPorject=true
    this.NotSelectPorject = true;   // or your condition

  // Destroy old chart if exists
  this.destroyChart('barChart4');

  // Wait for Angular to create the canvas again
  setTimeout(() => {
    this.renderChart4('barChart4', 'bar');
    this.renderChart5('barChart5', 'bar');

  });
        
  }
  else
       this.NotSelectPorject=false;

  console.log('Selected ID:', this.selectedId1);
    console.log('Selected ID11:', this.SelectID1);
  /*    this.renderChart('pieChart', 'pie');;
   this.renderChart1('barChart', 'bar');

   this.renderChart2('barChart2', 'bar');
  this.renderChart3('pieChart2', 'pie');;*/
      this.themeSubscription = this.themeModeService.themeMode.subscribe(
          (theme) => {
            this.labelColor =
              theme === 'default'
                ? 'rgba(10, 10, 10, 0.7)'
                : 'rgba(255, 255, 255, 0.7)';

            if (this.chartInstances.length > 0) {
              this.chartInstances.forEach((chart) => chart.destroy());
              this.chartInstances = [];
            }

            //this.renderChart1('barChart', 'bar');
            this.renderChart('pieChart', 'pie')
            this.renderChart1('barChart', 'bar');

   this.renderChart2('barChart2', 'bar');
  this.renderChart3('pieChart2', 'pie');;
    this.renderChart6('barChart6', 'bar');;

  //this.renderChart4('barChart4', 'bar');

           // this.statisticsService.GetTopPlans(5).subscribe((res) => {
             // this.renderChart2('barChart2', 'bar');
          //  });
          }
        );

}
ShowReport()
{
  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboardRpt';



  this.router.navigateByUrl(returnUrl);
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