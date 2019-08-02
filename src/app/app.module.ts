import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';
import { formElements } from './formElements';
import {RouterModule} from '@angular/router';
import{AppRoutingModule}from'./app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserFormComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgDragDropModule.forRoot()
  ],
  providers: [formElements],
  bootstrap: [AppComponent]
})
export class AppModule { }
