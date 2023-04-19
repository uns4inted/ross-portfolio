import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as PureCounter from '@srexi/purecounterjs';
import { ProfileDataService } from 'src/app/services/profile-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public sectionShow: boolean = false;
  public counter: PureCounter;

  public aboutData: any = {};

  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.aboutData = this.profileDataService.getAboutData();
    this.showSection();
    this.setSkills();
    // initialize counter
    this.counter = new PureCounter();
  }

  // TODO: extract helper methods to service

  showSection() {
    // show section after 300ms delay to play animation of section fade in
    setTimeout(() => {
      this.sectionShow = true;
    }, 300);
  }

  setSkills() {
    let skills = {...this.aboutData.skills};
    // set skills values to 0
    for (const skill in skills) {
      this.aboutData.skills[skill] = 0;
    }
    // return skills values after 300ms delay to play animation for progress bars
    setTimeout(() => {
      this.aboutData.skills = skills;  
    }, 300);
  }
}
