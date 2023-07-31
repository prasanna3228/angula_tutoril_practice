import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANGULARTUTORIAL';
  // un: string = 'someStringValue';

  constructor() {}

  
  // submit(form:string){
  //   console.log(form)
  // }
  

  submit(loginForm: NgForm) {
    console.log(loginForm)
  }

}
