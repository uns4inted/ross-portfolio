import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as PureCounter from '@srexi/purecounterjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public sectionShow: boolean = false;
  public counter: PureCounter;

  // TODO: extract to json file
  public skills = {
    html: 0,
    css: 0,
    js: 0,
    angular: 0,
    react: 0,
    node: 0,
  };

  constructor() {}

  ngOnInit(): void {
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
    // set skills values after 300ms delay to play animation for progress bars
    setTimeout(() => {
      this.skills = {
        html: 90,
        css: 75,
        js: 95,
        angular: 85,
        react: 75,
        node: 50,
      };
    }, 300);
  }
}
