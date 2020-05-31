import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../services/auth-guard.service';
import { ResourceService } from '../services/resource/resource.service';
import { LoginUiConfig } from './login-ui-config';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserAlreadyLogginComponent } from '../shared/user-already-loggin/user-already-loggin.component';
import { Utils } from '../shared/utilities/utils';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validLogin = true;
  loginUiConfig: LoginUiConfig = {};

  constructor(
    private formBuilder: FormBuilder,
    private loginservice: LoginService,
    private route: Router,
    private authGaurd: AuthGaurdService,
    private resourceConstant: ResourceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.initResources();
    this.authGaurd.isLoggedOut();
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private initResources() {
    this.loginUiConfig = {
      username: this.resourceConstant.getConstValue('login.username.label'),
      password: this.resourceConstant.getConstValue('login.password.label'),
      errorLabel: this.resourceConstant.getConstValue('login.error.label'),
      submit: this.resourceConstant.getConstValue('login.submit.label'),
      clearLabel: this.resourceConstant.getConstValue('login.clear.label'),
      invalidCred: this.resourceConstant.getConstValue('login.invalidCred.label')
    };

  }

  onSubmit() {
    this.loginservice.authenticateLogin(this.loginForm.value).subscribe(
      (success) => {
        Utils.SET_SESSION_STORAGE('auth-token', success.token);
        Utils.SET_SESSION_STORAGE('loggedInUser', this.loginForm.value.username);
        if(this.loginForm.value.username === 'ravi'){
          Utils.SET_SESSION_STORAGE('isAdmin', 'false');
        } else {
          Utils.SET_SESSION_STORAGE('isAdmin', 'true');
        }
        
        this.authGaurd.isLoggedIn();
        this.route.navigateByUrl('dashboard');
      },
      (errorData) => {
        this.dialog.open(UserAlreadyLogginComponent, {
          data: errorData.error.message
        });
      }
    );
  }

  ClearLogin() {
    this.loginForm.reset();
    this.validLogin = true;
  }

}
