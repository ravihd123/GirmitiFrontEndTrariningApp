import { Injectable } from '@angular/core';
import { HttpClientService } from 'src/app/services/http-client.service';
import { AddTestConfigConstants } from './addtest-constant';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddtestService {
  getrainingid: any;

  constructor(
    private httpservice : HttpClientService
  ) { }

createTest(testFormdata, isEdit, data):Observable <any> {
  console.log("data", data )
const createTestFormData={
  "trainingId":this.getrainingid._id,
  "testName": testFormdata.testname,
  "difficultyLevel":testFormdata.difficultylevel,
  "numberOfQuestions":testFormdata.numberofque,
  "numberOfAttempts":testFormdata.attempts,
  "totalMarks":testFormdata.totalmarks,
  "passMarks":testFormdata.pass,
  "status":testFormdata.status

  }
  console.log("test data sending to backend", createTestFormData);
  
  if(isEdit){
    return this.httpservice.callApi('PUT', AddTestConfigConstants.CreateTest.URL + data._id, createTestFormData )

  }else{
    return this.httpservice.callApi('POST', AddTestConfigConstants.CreateTest.URL, createTestFormData);
  }
  
}



gettrainingid(trainingid){
  this.getrainingid=trainingid
}
  





}
