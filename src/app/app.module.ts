import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { AppComponent } from './app.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonGetComponent } from './person-get/person-get.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

import { PersonService } from './person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonAddComponent,
    PersonGetComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ PersonService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
