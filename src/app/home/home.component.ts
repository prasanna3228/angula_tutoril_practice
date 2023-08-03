import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private ts: TestService) { 
    this.ts.as.subscribe(
      (data)=>{
        console.log(data)
      }
      
    )
  }

  send(){
    
    this.ts.as.complete()

  }

 
}
