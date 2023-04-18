import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/services/profile-data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  public sectionShow: boolean = false;
  public myServicesData: any = {};

  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.myServicesData = this.profileDataService.getMyServicesData();
    this.showSection();
  }

  // TODO: extract to service
  showSection() {
    // show section after 300ms delay to play animation of section fade in
    setTimeout(() => {
      this.sectionShow = true;
    }, 300);
  }
}
