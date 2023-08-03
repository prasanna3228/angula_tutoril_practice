import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestService } from './test.service';





@NgModule({
  declarations: [AppComponent, HomeComponent,  ],
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
