import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor(
    private httpSrv: HttpClientService
  ) { }


  isLoggedIn() {
    sessionStorage.setItem('isLoggedIn', 'true');
  }

  isLoggedOut() {
    return this.httpSrv.callApi('get', '/auth/logout');

  }

  getLogginStatus(): boolean {
    if (sessionStorage.getItem('isLoggedIn') === 'true' ) {
      return true;
    } else {
      return false;
    }
  }
}
