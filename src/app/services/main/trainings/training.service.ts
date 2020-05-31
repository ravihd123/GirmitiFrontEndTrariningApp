import { Injectable } from '@angular/core';
import { trainingConstant, PeriodicElement } from './trianing-constant';
import { MatTableConfig } from 'src/app/shared/custom-mat-table/mat-table.module';
import { HttpClientService } from '../../http-client.service';
import { TariningConfigConstants } from './training-config.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  tableConfig: MatTableConfig

  constructor(
    private httpClientService: HttpClientService
  ) { }

  getTableConfig(): any {
    return trainingConstant.GRID_CONFIG
  }

  getUserTableConfig(): any {
    return trainingConstant.USER_GRID_CONFIG;
  }

  getTableData(): Observable <PeriodicElement> {
    return this.httpClientService.callApi('get', TariningConfigConstants.TRAINING_LIST.URL);
  }

  deleteTraining(event): Observable<any> {
    return this.httpClientService.callApi('DELETE', TariningConfigConstants.deleteTraining.URL + event._id);
  }
}
