import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ProfileDataService } from '../services/profile-data.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  public isNavbarCollapsed = true;
  public isHomePage = false;
  public socialLinks: {name: string, link: string, icon: string}[] | [] = [];

  constructor(
    private router: Router,
    private profileDataService: ProfileDataService
  ) {}

  ngOnInit(): void {
    this.checkCurrentRoute();
    this.socialLinks = this.profileDataService.getSocialLinks();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // helper method to close navbar on click on mobile devices
  closeNavbar() {
    if (this.isNavbarCollapsed === false) {
      this.isNavbarCollapsed = true;
    }
  }

  checkCurrentRoute() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        let currentUrl = event.urlAfterRedirects;
        this.isHomePage = currentUrl === '/home';
      });
  }
}
