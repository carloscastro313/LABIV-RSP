import { FormGroup } from '@angular/forms';

export class FormGenerate{
  FormDynamic : FormGroup
  Type : string[]
  name : string[]
  select : any[]

  constructor(form : FormGroup, Type : string[], name : string[], select : any[]){
    this.FormDynamic = form
    this.Type = Type
    this.name = name
    this.select = select
  }

  isComplete(){
    return ((this.FormDynamic != null || this.Type != null || this.name || this.select) != null)
  }

  isValid(){
    return this.FormDynamic.valid;
  }
}
