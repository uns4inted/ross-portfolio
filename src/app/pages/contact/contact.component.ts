import { Component } from '@angular/core';
import { ProfileDataService } from 'src/app/services/profile-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public sectionShow: boolean = false;
  public contactsData: any = {};

  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.contactsData = this.profileDataService.getContactsData();
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
