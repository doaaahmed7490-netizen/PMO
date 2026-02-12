import { Component, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { Chart, ChartTypeRegistry, registerables } from 'chart.js';
import { Subscription } from 'rxjs';
import { ThemeModeService } from '../../../components/navbar/theme-mode.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements AfterViewInit, OnDestroy {
  @Input() chartID: string;
  labelColor: string;
  chartInstances: Chart[] = [];
  themeSubscription: Subscription;

  constructor(private themeModeService: ThemeModeService) {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
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

        this.renderChart(this.chartID, 'pie');
      }
    );
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
            borderWidth: 1,
            borderRadius: 6,
            borderColor: 'white',
            tension: 0.1,
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

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
