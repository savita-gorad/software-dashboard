import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {ApexNonAxisChartSeries,ApexResponsive,ApexChart} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @ViewChild("chart") chart: any;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13],
      chart: {
        type: "donut"
      },
      title: {
        text: 'Top Products',
        align: 'left',
      },
      labels: ["Men", "Electronics", "Women"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}
