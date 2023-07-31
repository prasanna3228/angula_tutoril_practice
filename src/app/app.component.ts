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

  // @ViewChild("reg") p:any;
  
  submit(reg:any){
    console.log(reg)
    console.log('1')
    if (reg.valid) {
      // Access the form values
      const username = reg.value.username;
      const password = reg.value.password;
      console.log('Username:', username);
      console.log('Password:', password);
    }
    // reg.setValue(
    //   {
    //     "username":"john",
    //     "password":"123456789"
    //   }
    // )

}
}