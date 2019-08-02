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
  

  droppedItems = [];
  currentDraggedItem: any;
  formElements = [
    { name: 'text', type: 'input-text', inputType: 'text', placeholder: '' },
    { name: 'checkbox', type: 'input-check', inputType: 'checkbox', placeholder: null },
    { name: 'file', type: 'file', inputType: 'file', placeholder: null },
    { name: 'date', type: 'date', inputType: 'date', placeholder: null },
    { name: 'select', type: 'select', inputType: 'select', placeholder: null }
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


  onSubmit(_placeholder: any): void {
    this.display = false;
    console.log(_placeholder)
    this.updateDroppedItem(_placeholder);
  }

  renderUSerForm(): void {
    this.data.FormElements = this.droppedItems;
    this.router.navigate(['/userform']);
  }

  updateDroppedItem(placeholder: any): void {
    console.log("this.currentDraggedItem.dragData----------->"+JSON.stringify(this.currentDraggedItem.dragData))
    console.log("this.currentDraggedItem----------->"+JSON.stringify(this.currentDraggedItem))
    this.currentDraggedItem.dragData.placeholder = placeholder;
    this.droppedItems.push(this.currentDraggedItem.dragData);
    console.log(this.droppedItems)
  }

}
