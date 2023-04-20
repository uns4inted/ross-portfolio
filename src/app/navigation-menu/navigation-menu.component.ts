import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit {
  public isNavbarCollapsed = true;
  public isHomePage = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.checkCurrentRoute();
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  checkCurrentRoute() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd | any) => {
        let currentUrl = event.url;
        this.isHomePage = currentUrl === '/home';
      });
  }
}
