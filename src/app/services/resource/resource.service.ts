import { Injectable } from '@angular/core';
import { ResourceConstants } from '../../constant/resource.constant'

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor() {
  }

  getConstValue(key: string): string {
    return ResourceConstants.RESOURCES[key]
  }

}
