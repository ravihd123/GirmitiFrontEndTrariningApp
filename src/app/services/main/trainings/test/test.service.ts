import { Injectable } from '@angular/core';
import {testConstant, ELEMENT_DATA, PeriodicElement} from './test-constant';
import { MatTableConfig } from '../../../../shared/custom-mat-table/mat-table.module';
import { Subject, Observable } from 'rxjs';
import { HttpClientService } from '../../../http-client.service';
import { AddTestConfigConstants } from './addtest/addtest-constant';


@Injectable({
  providedIn: 'root'
})
export class TestService {
  dataToEdit =new Subject();
  tableConfig:MatTableConfig;
  trainingid : any;


   sendtrainingid= new Subject()
 

  constructor(
    private httpservice : HttpClientService
  ) { }

  getMattableConfig(): any {
    return testConstant.GRID_CONFIG;
  }
  getMattableData() : Observable <PeriodicElement>  {

     return this.httpservice.callApi('GET', AddTestConfigConstants.CreateTest.URL + this.trainingid._id)
  
  }
// POSTING DATA
  getTestFormdata(formdata ){
    console.log("Formdata sending to BackEnd", formdata);
  }

  getTrainingId(TrainingId){
   this.trainingid=TrainingId;
  }

  // DELETING TEST

  deleteTestlist(event): Observable<any> {
    return this.httpservice.callApi('DELETE', AddTestConfigConstants.CreateTest.URL + event._id);
    
  }


  // Getting default test config values

  getTestConfigvalue(){
    return this.httpservice.callApi('GET', AddTestConfigConstants.testConfigValue.URL)
  }


 
  
}
