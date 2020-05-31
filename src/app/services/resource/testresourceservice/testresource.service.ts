import { Injectable } from '@angular/core';
import { TestResourceConstants } from '../../../constant/test-resource.constant';

@Injectable({
  providedIn: 'root'
})
export class TestresourceService {

  constructor() { }

  getTestConstValue(key: string): any {
    return TestResourceConstants.TESTRESOURCES[key];
  }
}