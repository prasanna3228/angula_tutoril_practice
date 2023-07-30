import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ANGULARTUTORIAL';

  constructor() {}

  clients = ['client1', 'client2', 'client3'];

  employees = ['employe 1', 'employe 2', 'employe 3'];
}
