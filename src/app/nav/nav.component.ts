import { Component, OnInit } from '@angular/core';
import { AuthGaurdService } from '../services/auth-guard.service';
import { NavService } from '../services/nav/nav.service';
import { Router } from '@angular/router';
import { Utils } from '../shared/utilities/utils';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authGaurd: AuthGaurdService, private navService: NavService, private route: Router) { }

  navItems: any;



  ngOnInit(): void {
    // this.navItems = JSON.parse(this.navService.getNavItems('nav.admin.privileges'));
    const isAdmin = Utils.GET_SESSION_STORAGE('isAdmin');
    if (isAdmin === 'true') {
      this.navItems = JSON.parse(this.navService.getNavItems('nav.admin.privileges'));
    } else {
      this.navItems = JSON.parse(this.navService.getNavItems('nav.user.privileges'));
    }
    
  }

  logout() {
    this.authGaurd.isLoggedOut().subscribe(
      (data) => {
        // console.log(data)
        this.route.navigateByUrl('login');
        sessionStorage.clear();
      }
    )
  }



}
