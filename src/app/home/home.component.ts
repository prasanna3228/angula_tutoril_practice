import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ts: TestService) { 
    
  }

  ngOnInit(): void {
    
    this.ts.bs.subscribe(
      (data) => {
        console.log(data);
      }
    );
    this.ts.rs.subscribe(
      (data) => {
        console.log(data);
      }
    );
   
  }
}
