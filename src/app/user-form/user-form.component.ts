import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { formElements } from '../formElements';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  
})
export class UserFormComponent implements OnInit {

  constructor( private data: formElements) { }
  forms :any[];
  ngOnInit() {
    this.forms = this.data.FormElements;
    console.log("forms---->"+this.forms);
  }

}
