import { Injectable } from '@angular/core';
import { barChartData, lineChartData, piaChartData, barChartOptions, lineChartOptions, piaChartOptions, barChartLabels } from './dashboard.constant';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getLineGraphData(): any {
    return lineChartData;
  }

  getBarGraphData(): any {
    return barChartData;
  }

  getPiaGraphData(): any {
    return piaChartData;
  }

  getBarChartConfig(): any {
    return barChartOptions;

  }
  getLineChartConfig(): any {
    return lineChartOptions;
  }
  getPiaChartConfig(): any {
    return piaChartOptions;
  }

  getLables(): any {
   return barChartLabels;
  }

}
