import { MateriasService } from './../../../service/materias.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListDGenerate } from 'src/app/GenericModule/generics/generic-dynamic-list/ListDGenerate';
import { SelectorGenerate } from 'src/app/GenericModule/generics/generic-selector/SelectorGenerate';

@Component({
  selector: 'app-listado-coche',
  templateUrl: './listado-coche.component.html',
  styleUrls: ['./listado-coche.component.scss']
})
export class ListadoCocheComponent implements OnInit {

  selector : SelectorGenerate
  listado : any
  list : ListDGenerate
  error : string
  aux : string = 'Todos'
  correo : string

  constructor(private MateriasService : MateriasService) {
  }

  ngOnInit(): void {
    this.list = new ListDGenerate()
    setTimeout(() => {
      this.selector = new SelectorGenerate(new FormControl('Todos'),'Marca',['Todos','Fiat','Renaut','Hyundai'],['Todos','Fiat','Renaut','Hyundai'])
      this.refreshList()
    }, 1250);
  }

  select(aux : any){
    this.aux = this.selector.getValue()
  }

  refreshList(){
    let aux = this.MateriasService.getListAutos()
    if(aux.length == 0 ){
      this.error = 'No tiene autos'
    }else{
      this.listado = aux
      this.list.changeList(true,['text','text','text','text','text','text','img'])
      this.error = ''
    }
  }
}
