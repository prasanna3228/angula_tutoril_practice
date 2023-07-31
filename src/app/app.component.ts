import { Component, ViewChild ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANGULARTUTORIAL';
  // un: string = 'someStringValue';

  constructor() {}

  

  show(fc: any, p: any, group: any) {
    console.log(fc);
    console.log(p);
    console.log(group);
  }

  

}
