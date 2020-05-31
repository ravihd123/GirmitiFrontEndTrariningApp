import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { DashboardService } from 'src/app/services/main/dashboard/dashboard.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  barChartData: ChartDataSets[];
  lineChartData: ChartDataSets[];
  piaChartData: ChartDataSets[];
  barChartOptions: ChartOptions;
  lineChartOptions: ChartOptions;
  piaChartOptions: ChartOptions;
  barChartLabels: Label[];


  public barChartType1: ChartType = 'bar';
  public barChartType2: ChartType = 'line';
  public barChartType3: ChartType = 'pie';
  public barChartLegend = true;


  constructor(
    private chartSrv: DashboardService
  ) { }

  ngOnInit() {
    this.barChartLabels = this.chartSrv.getLables();
    this.getBarChartData();
    this.getLineChartData();
    this.getPiaChartData();
  }

  private getBarChartData() {
    this.barChartData = this.chartSrv.getBarGraphData();
    this.barChartOptions = this.chartSrv.getBarChartConfig();

  }
  private getLineChartData() {
    this.lineChartData = this.chartSrv.getLineGraphData();
    this.lineChartOptions = this.chartSrv.getLineChartConfig();

  }
  private getPiaChartData() {
    this.piaChartData = this.chartSrv.getPiaGraphData();
    this.piaChartOptions = this.chartSrv.getPiaChartConfig();
  }


  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }



}
