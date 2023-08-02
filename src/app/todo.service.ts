import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos=[
    'task1',
    'task2',
    'task3',
  ]
  todoList= new Subject()

  constructor() {
    this.sendTodos()
   }

   sendTodos(){
    this.todoList.next(this.todos)
   }

   addNewTodo(t:any){
    this.todos.push(t);
    // this.todoList.next(t)
    this.sendTodos()
    // this.todoList.next([this.todos]);
   }
}
