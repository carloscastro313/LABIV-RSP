import { SelectorGenerate } from './SelectorGenerate';
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-generic-selector',
  templateUrl: './generic-selector.component.html',
  styleUrls: ['./generic-selector.component.scss']
})
export class GenericSelectorComponent implements OnInit {

  flag : boolean = false
  @Input()selector : SelectorGenerate
  @Output()emit : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

  action(){
    if(this.selector.selector.valid){
      this.emit.emit(this.selector.getValue())
    }
  }
}
