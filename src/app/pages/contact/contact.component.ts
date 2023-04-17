import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public sectionShow: boolean = false;

  ngOnInit(): void {
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
