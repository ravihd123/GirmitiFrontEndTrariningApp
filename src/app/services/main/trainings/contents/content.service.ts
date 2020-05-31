import { Injectable } from '@angular/core';
import { contentConstant, ELEMENT_DATA, PeriodicElement } from './content-constant';
import { MatTableConfig } from 'src/app/shared/custom-mat-table/mat-table.module';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpClientService } from 'src/app/services/http-client.service';
import { ContentConfigConstants } from './content-config.constant';
import { Utils } from 'src/app/shared/utilities/utils';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  formData = new Subject();
  editFormData = new Subject();
  contentConfig: MatTableConfig;
  toggle: boolean;
  choosenContent: any;

  constructor(private _http: HttpClient,
    private httpClientService: HttpClientService) { }

  getContentConfig() {
    return contentConstant.GRID_CONFIG;
  }

  getContentData() {
    return ELEMENT_DATA;
  }

  getUserContentConfig(): any {
    return contentConstant.USER_GRID_CONFIG;

  }

  getContentTable(id: string): Observable<any> {
    return this.httpClientService.callApi('GET', ContentConfigConstants.CONTENT_LIST.URL + id);
  }

  createNewContent(event, fileData, id) {
    let body = new FormData();
    body.append('trainingId', id);
    body.append('contentName', event.name);
    body.append('contentDescription', event.description);
    body.append('status', event.status ==="Active" ? 'true' : 'false');
    body.append('attachment', fileData);
    return this.httpClientService.callApi('POST', ContentConfigConstants.createContent.URL, body);
  }

  deleteContent(event): Observable<any> {
    return this.httpClientService.callApi('DELETE', ContentConfigConstants.deleteContent.URL + event._id);
  }

  editContentById(event, fileData, id): Observable<any> {
    let body = new FormData();
    body.append('contentName', event.name);
    body.append('contentDescription', event.description);
    body.append('status', event.status ==="Active" ? 'true' : 'false');
    body.append('attachment', fileData);
    // {
    //   "trainingId": id.trainingId,
    //   "contentName": event.name,
    //   "contentDescription": event.description,
    //   "status": event.status,
    //   "attachment": event.content
    // }
    return this.httpClientService.callApi('PUT', ContentConfigConstants.editContent.URL + id._id, body);
  }

}
