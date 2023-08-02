import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'ANGULARTUTORIAL';
 
  obs=new Observable((nums)=>{
    nums.next(1),
    nums.next(2),
    nums.next(3),
    nums.complete(),
    nums.error("rgrgn")                       
    
   
    // nums.error("ERRRROR")
  
  })
  
  arr:any=[]

  constructor( ){
    setTimeout(()=>{
      this.obs.subscribe(
        {
       next: (data:any)=>this.arr.push(data),
        error: (err)=>console.log(err),
        complete:()=>{
          console.log(this.arr)
          for (let i of this.arr ){
              this.arr[i]+=100

          }
          console.log(this.arr)
        }
        }

      )
    },2000)
    
  }

  ngOnInit():void{
    // this.obs.subscribe(
    //   data=>{console.log(data)},
    //   err=>{console.log(err)},
    //   ()=>{console.log('Completed')}
    // )

  }
}
