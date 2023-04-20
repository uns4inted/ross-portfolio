import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { ContactService } from 'src/app/services/contact.service';
import { ProfileDataService } from 'src/app/services/profile-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public sectionShow: boolean = false;
  public contactsData: any = {};

  public FormData: FormGroup;
  public sendingFormData: boolean = false;
  public formSendSuccess: boolean = false;
  public formSendError: boolean = false;
  public errorMessage: string = '';

  constructor(
    private fBuilder: FormBuilder,
    private profileDataService: ProfileDataService,
    private contactService: ContactService
  ) {
    // init form
    this.FormData = this.fBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    // get page data from service
    this.contactsData = this.profileDataService.getContactsData();
    this.showSection();
  }

  onSubmit(fData: FormData): any {
    this.sendingFormData = true;
    this.formSendSuccess = false;
    this.formSendError = false;
    this.errorMessage = '';
    this.FormData.disable();
    // delay for testing purposes
    // TODO: remove delay
    setTimeout(() => {
      // logic ...
      this.contactService.sendEmail(fData).subscribe({
        next: (data) => {
          this.sendingFormData = false;
          this.formSendSuccess = true;
          this.FormData.reset();
          this.FormData.enable();
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.sendingFormData = false;
          this.formSendError = true;
          this.errorMessage = error.error.error;
          this.FormData.enable();
        },
      });
      // ...end logic
    }, 3000);
  }

  // TODO: extract to service
  showSection(): void {
    // show section after 300ms delay to play animation of section fade in
    setTimeout(() => {
      this.sectionShow = true;
    }, 300);
  }
}
