import { Injectable } from '@angular/core';
import { ResourceService } from '../resource/resource.service';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor(
    private resourceSrv: ResourceService
  ) { }

  getNavItems(key : string) : string {

    return this.resourceSrv.getConstValue(key)
  }
}
