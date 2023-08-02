import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
TodoService
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  constructor(private ts:TodoService){}

  addTodo(t:string){
    this.ts.addNewTodo(t)
  }


}
