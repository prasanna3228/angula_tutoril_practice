import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import { FormControl, NgForm,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANGULARTUTORIAL';
  
  constructor() {}

 login=new FormGroup({
    uname:new FormControl(),
    password:new FormControl()
 })

  
  show(){
    console.log(this.login)
    console.log(this.login.value)
    console.log(this.login.controls.uname.value)
  }
  

    

}