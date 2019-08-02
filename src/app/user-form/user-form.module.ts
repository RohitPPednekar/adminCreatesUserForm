import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { formElements } from '../formElements';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UserFormComponent
  ],
  providers: [
    formElements
  ]
})
export class UserFormModule { }
