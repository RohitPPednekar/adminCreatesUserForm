import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { formElements } from '../formElements';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  
})
export class UserFormComponent implements OnInit {

  constructor( private data: formElements) { }
  forms :any[];
  renderingForm=[];
  reactiveForm={};
  myForm: FormGroup; 
  ngOnInit() {
    this.forms = this.data.FormElements;
    for(let elements of this.forms ){
      this.reactiveForm[elements.type] = new FormControl('',[]);
      this.renderingForm.push(elements.type);
    }
    console.log("forms---->"+this.forms);
    this.myForm = new FormGroup(this.reactiveForm);
  }

}
