import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartTypeRegistry, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ThemeModeService } from '../../../components/navbar/theme-mode.service';
import { SurveyQstAnalysis } from '../../../models/Survey/SurveyQstAnlysis.model';
import { SurveyService } from '../../../services/Survey.service';

@Component({
  selector: 'app-survey-ananlysis-qst',
  templateUrl: './survey-ananlysis-qst.component.html',
  styleUrls: ['./survey-ananlysis-qst.component.scss']
})
export class SurveyAnanlysisQstComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  chartInstances: Chart[] = [];
  themeSubscription: Subscription;
  labelColor: string;
  surveyQstAnalysis:SurveyQstAnalysis[];

  constructor(private themeModeService: ThemeModeService
    ,private surveyResponse:SurveyService

    ) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
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

        this.renderChart('barChart', 'bar');
        this.renderChart('pieChart', 'pie');
        this.renderChart('lineChart', 'line');
      }
    );
    this.surveyResponse.GetAllSurveyQstAnalysis("50b4b93f-f74d-491f-be7f-8d346a92c3f0").subscribe((res) => {
      // this.DashboardDto = res;
     this.surveyQstAnalysis=res;
console.log(res.length);
     console.log("Qst Text"+res[1].questText);
    })
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onReset() {
    this.form.reset();
  }

  renderChart(id: string, chartType: keyof ChartTypeRegistry) {
    console.log(id);
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

  renderChart1(id: string, chartType: keyof ChartTypeRegistry) {
    console.log(id);
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

  renderChart2(id: string, chartType: keyof ChartTypeRegistry) {
    console.log(id);
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


  renderChart3(id: string, chartType: keyof ChartTypeRegistry) {
    console.log(id);
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
}

