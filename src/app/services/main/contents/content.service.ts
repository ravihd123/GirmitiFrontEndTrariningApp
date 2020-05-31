import { Injectable } from '@angular/core';
import { contentConstant, ELEMENT_DATA } from './content-constant';
import { MatTableConfig } from 'src/app/shared/custom-mat-table/mat-table.module';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  formData = new Subject();
  editFormData = new Subject();
  contentConfig: MatTableConfig;
  toggle:boolean;
  // name: string;
  choosenContent: any;
  constructor() { }

  getContentConfig() {
    return contentConstant.GRID_CONFIG;
  }

  getUserContentConfig() {
    return contentConstant.USER_GRID_CONFIG;
  }

  getContentData() {
    return ELEMENT_DATA;
  }

}
