import { Injectable } from '@angular/core';
import { AssessmentData } from './Assessmen-Configuration-contant ';
import { HttpClientService } from '../http-client.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentConfigrationService {

  constructor(private httpSrv: HttpClientService
  ) { }

  getFormData(): Observable<any> {
    return this.httpSrv.callApi('GET', '/testconfig/');
  }

  dispalyFormData(data, id): Observable<any> {
    const body = {
      "numberOfQuestions": data.numberofquestion,
      "numberOfAttempts": data.numberofattemts,
      "passMarks": data.passmarks,
      "totalMarks": data.totalmarks,
    }

    return this.httpSrv.callApi('PUT', '/testconfig/' + id, body);
  }

}
