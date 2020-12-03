import { FormControl } from '@angular/forms'

export class SelectorGenerate{
  selector : FormControl
  name : string
  select : any[]
  value : any[]

  constructor(selector : FormControl, name : string, select : any[], value : any[]){
    this.selector = selector
    this.name = name
    this.select = select
    this.value = value
  }

  public isComplete(){
    if((this.name || this.select || this.value) != null){
      if(this.select.length == this.value.length){
        return true
      }else{
        console.log("Se tiene que agregar la misma cantidad de selectores y valores")
      }
    }else{
      console.log("Existen valores nulos")
    }
    return false
  }

  public getValue(){
    return this.selector.value;
  }
}
