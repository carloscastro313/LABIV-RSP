import { LoginService } from './../../../service/login.service';
import { MateriasService } from './../../../service/materias.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ListDGenerate } from 'src/app/GenericModule/generics/generic-dynamic-list/ListDGenerate';

@Component({
  selector: 'app-eliminar-coche',
  templateUrl: './eliminar-coche.component.html',
  styleUrls: ['./eliminar-coche.component.scss']
})
export class EliminarCocheComponent implements OnInit {

  error : string
  listado : any
  list : ListDGenerate
  correo : string
  nombre : string

  constructor(private fb : FormBuilder,private MateriasService : MateriasService, private LoginService : LoginService) {
    this.correo = JSON.parse(this.LoginService.GetSesionActual())?.correo
  }

  ngOnInit(): void {
    this.list = new ListDGenerate()
    setTimeout(() => {
      this.refreshList()
    }, 1400)
  }

  accion(value : any){
    this.MateriasService.eraseElement('/autos/'+value.retorno+this.correo.replace('.','_'))
    setTimeout(() => {
      this.refreshList()
    }, 1000);
  }

  refreshList(){
    let aux = this.MateriasService.getListAutos().filter(aux => aux.email == this.correo)
    if(aux.length == 0 ){
      this.error = 'No tiene autos'
    }else{
      this.listado = aux
      this.list.changeList(true,['text','text','text','text','text','text','img'],['Eliminar'],[5])
      this.error = ''
    }
  }
}
