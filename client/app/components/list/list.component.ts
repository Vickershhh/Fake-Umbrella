import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

  @Input() dataList;
  @Output() deleteEvt = new EventEmitter();
  @Output() updateEvt = new EventEmitter();
  @Output() rainEvt = new EventEmitter();

  deleteItem(theApt: object){
    this.deleteEvt.emit(theApt);
  }

  handleUpdate(item:object,labelName:string, newValue:string) {
    item[labelName] = newValue;
    console.log(item);
    this.updateEvt.emit(item);
  }

  displayRainy(){
    this.rainEvt.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
