import { Component, OnInit } from '@angular/core';
import { AuthGaurdService } from './services/auth-guard.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;
  constructor(
    private authGaurd: AuthGaurdService, public spinnerService: SpinnerService
  ) {

  }

  ngOnInit(): void {
  }



  showAfterLog() {
    return this.authGaurd.getLogginStatus();
  }

  logout() {
    this.authGaurd.isLoggedOut();
  }

}
