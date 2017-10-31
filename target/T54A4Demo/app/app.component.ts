import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./styles/app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
  winHeight=0;

  ngOnInit(): void {
    console.log("#####################init : " + window.innerHeight);
    this.winHeight = window.innerHeight - 20 - 82;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log("#####################resize : " + window.innerHeight);
    this.winHeight = window.innerHeight - 20 - 82;
  }

}
