import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Crud/dashboard/dashboard.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, DashboardComponent ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
