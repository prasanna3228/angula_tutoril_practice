import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {RouterModule, Router, Routes } from '@angular/router';

import {HttpClientModule} from '@angular/common/http'

import { TestService } from './test.service';


@NgModule({
  declarations: [AppComponent,   ],
  imports: [BrowserModule,
     AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule
    ],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
