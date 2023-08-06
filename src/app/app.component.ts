import { AfterViewInit, Component,OnInit, ViewChild,AfterContentInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent   {
 title='ANGULARTUTORIAL'


constructor(private http:HttpClient){

}
data:any;

getmyData(){
  this.http.get("https://fakestoreapi.com/products?limit=5")
  .subscribe((data)=>{
    console.log(data)
    this.data=data
  })

}



}


