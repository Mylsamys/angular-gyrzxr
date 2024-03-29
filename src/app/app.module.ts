import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChangeTextDirective } from './change-text.directive.spec';
import { ReactiveFormsModule } from '@angular/forms';

import { ScrollDispatchModule } from '@angular/cdk/scrolling';

import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,HttpClientModule,ScrollDispatchModule,BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
