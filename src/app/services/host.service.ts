import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor() { }

  getHostURL() {
    const hostURL = 'http://localhost:9340';
    return hostURL;
  }
}
