import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from 'src/app/services/profile-data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  public sectionShow: boolean = false;
  public resumeData: any = {};

  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.resumeData = this.profileDataService.getResumeData();
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
