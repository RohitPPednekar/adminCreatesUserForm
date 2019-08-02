import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { formElements } from '../formElements';
@NgModule({
  imports: [
    CommonModule,
    NgDragDropModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    AdminComponent
  ],
  providers: [
    formElements
  ]
})
export class AdminModule { }
