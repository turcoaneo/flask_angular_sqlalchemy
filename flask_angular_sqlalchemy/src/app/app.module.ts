import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: "/"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
