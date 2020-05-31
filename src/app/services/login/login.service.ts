import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { HttpParams } from '@angular/common/http';
import { GlobalConstants } from 'src/app/constant/global.constants';
import { LoginConfigConstants } from './login-config.constants';
import { Utils } from 'src/app/shared/utilities/utils';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClientService: HttpClientService) { }

  authenticateLogin(userdData) {
    // let reqData = new HttpParams();
    // reqData = Utils.SET_PARAMS(reqData, 'userName', userdData.username);
    // reqData = Utils.SET_PARAMS(reqData, 'password', userdData.password);
    const reqData = {
      'userName' : userdData.username,
      'password' : userdData.password
    };
    return this.httpClientService.callApi('POST', LoginConfigConstants.LOGIN.URL, reqData);
  }

}
