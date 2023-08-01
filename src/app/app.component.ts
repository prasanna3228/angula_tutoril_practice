import { Component, ViewChild ,AfterViewInit} from '@angular/core';
import { FormControl, NgForm,FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANGULARTUTORIAL';
  
  // constructor() {}

 regForm=new FormGroup({
    uname:new FormControl("john",[Validators.required,Validators.minLength(8)]),
    email:new FormControl("xyz@gmail.com",[Validators.required,Validators.email])
  
  })
  
show(){
  console.log(this.regForm)
}
    

}