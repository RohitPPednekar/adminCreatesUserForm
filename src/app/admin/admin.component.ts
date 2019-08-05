import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { formElements } from '../formElements';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  modalPopupObject: any;
  display: boolean = false;
  formElement :formElements[];
  spaceValidator = false;

  droppedItems = [];
  currentDraggedItem: any;
  formElements = [
    { name: 'text', type: 'input-text',fieldName:'',validationRequired : false },
    { name: 'password', type: 'input-password',fieldName:'',validationRequired : false },
    { name: 'checkbox', type: 'input-check',  placeholder: null,fieldName:'',validationRequired : false },
    { name: 'file', type: 'file', placeholder: null,fieldName:'',validationRequired : false },
    { name: 'date', type: 'date', placeholder: null,fieldName:'',validationRequired : false },
    { name: 'select', type: 'select', placeholder: null,fieldName:'',validationRequired : false }
  ];

  constructor(private data: formElements,private router: Router) {  
    
  }
  ngOnInit(): void {
  
  }

  
  onAnyDrop(dropDrag: any) {
    this.currentDraggedItem = dropDrag;
    this.display = true;
   
  }


  // removeItem(item: any, list: Array<any>) {
  //   let index = list.map(function (e) {
  //     return e.name
  //   }).indexOf(item.name);
  //   list.splice(index, 1);
  // }


  onSubmit(fieldsParams: any): void {
    
    var spaceValidationRule = /^\S{3,}$/;
    console.log(fieldsParams)
    
    if(spaceValidationRule.test(fieldsParams.fieldName)){
      this.updateDroppedItem(fieldsParams);
      this.display = false;
      this.spaceValidator = false;
    }else{
      this.spaceValidator = true;
      this.display = true;
    }
    
  }

  renderUSerForm(): void {
    this.data.FormElements = this.droppedItems;
    this.router.navigate(['/userform']);
  }
  
  updateDroppedItem(updatedFields: any): void {
    
    var obj ={
      name: '', type: '', inputType: '',fieldName:'',validationRequired : false ,placeholder :''
    };
    obj.name = this.currentDraggedItem.dragData.name;
    obj.type = this.currentDraggedItem.dragData.type;
    obj.inputType = this.currentDraggedItem.dragData.inputType;
    obj.fieldName = updatedFields.fieldName;
    obj.validationRequired = (updatedFields.Validation) ? updatedFields.Validation : false;
    obj.placeholder = updatedFields.placeholder;
    
    console.log("this.currentDraggedItem.dragData----------->"+JSON.stringify(this.currentDraggedItem.dragData))
    console.log("obj----------->"+JSON.stringify(obj))
    this.droppedItems.push(obj);
   
    console.log("this.droppedItems------------>"+JSON.stringify(this.droppedItems))
  }

}
