import { FormGenerate } from './formGenerate';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-genericformclass',
  templateUrl: './genericformclass.component.html',
  styleUrls: ['./genericformclass.component.scss']
})
export class GenericformclassComponent implements OnInit {

  flag : boolean = false;

  @Input() form : FormGenerate
  @Output()FormReturn : EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  retorno(){
    if(this.form.isValid()){
      this.FormReturn.emit(this.form.FormDynamic.value);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  upload(event, form) {
    form.setValue( event.target.files[0]);
  }

}
