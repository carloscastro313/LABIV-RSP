import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], tipo : any): unknown {

    if(tipo != 'Todos'){
      return value.filter(aux => aux.marca == tipo)
    }
    return value;
  }

}
