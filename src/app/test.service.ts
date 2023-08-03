import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject,ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  
  bs=new BehaviorSubject("behavior subject first data")

  rs=new ReplaySubject()
  constructor() { 

  this.bs.next("behaviour subject  1");  
  this.bs.next("behaviour subject  2");
  this.bs.next("behaviour subject  33");
  this.rs.next("replay subject 1");
  this.rs.next("replay subject 2");
  this.rs.next("replay subject 3");
  this.rs.next("replay subject 4")
  }
}
