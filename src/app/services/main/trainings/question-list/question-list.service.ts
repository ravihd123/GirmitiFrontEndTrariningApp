import { Injectable } from '@angular/core';
import { questionsConstant, ELEMENT_DATA } from './question-list-constant';

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {

  constructor() { }

  getMattableConfig(): any {
    return questionsConstant.TABLE_CONFIG;
  }

  getMattableData(): any {
    return ELEMENT_DATA;
  }
}
