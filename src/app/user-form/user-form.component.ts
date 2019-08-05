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
  submitted :boolean= false;
  forms :any[];
  renderingForm=[];
  myForm: FormGroup; 
  ngOnInit() {
    var reactiveForm={};
    this.forms = this.data.FormElements;
    if(this.forms && this.forms.length > 0){
      for(let elements of this.forms ){
        if(elements.validationRequired){
          reactiveForm[elements.fieldName] = new FormControl('',[Validators.required]);
        }else{
          reactiveForm[elements.fieldName] = new FormControl('',[]);
        }
        
        this.renderingForm.push({type:elements.type,formControllName : elements.fieldName, placeholder : elements.placeholder});
      }
    }  
    console.log("forms---->"+this.forms);
    this.myForm = new FormGroup(reactiveForm);
  }
  get formControlls() { 
    return this.myForm.controls; 
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)')
}


}
