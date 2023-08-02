import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Router, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';







@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoFormComponent, ],
  imports: [BrowserModule,
     AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
