import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  taskId = 3;
  // task: any;

  todoList = [
    {
      id: 1,
      task: 'Task1',
    },
    {
      id: 2,
      task: 'Task2',
    },
  ];

  constructor() {}

  addTodo(taskName: string) {
    this.todoList.push({ id: this.taskId++, task: taskName });
  }

  deleteTodo(index: number) {
    this.todoList.slice(index, 1);
  }
}
