import { Injectable } from '@angular/core';
import { Subject,BehaviorSubject,ReplaySubject ,AsyncSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  
  as=new AsyncSubject();

  constructor() {
    this.as.next("data 1")
    this.as.next("data 2")
    
    
  }
  
  

}
