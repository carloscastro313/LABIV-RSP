import { MateriasService } from './../../../service/materias.service';
import { LoginService } from './../../../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGenerate } from 'src/app/GenericModule/generics/genericformclass/formGenerate';
import { ListDGenerate } from 'src/app/GenericModule/generics/generic-dynamic-list/ListDGenerate';
import { verify } from 'crypto';

@Component({
  selector: 'app-modificar-coche',
  templateUrl: './modificar-coche.component.html',
  styleUrls: ['./modificar-coche.component.scss']
})
export class ModificarCocheComponent implements OnInit {

  error : string
  listado : any
  list : ListDGenerate
  correo : string
  nombre : string
  form : FormGenerate = null

  constructor(private fb : FormBuilder,private MateriasService : MateriasService, private LoginService : LoginService) {
    this.correo = JSON.parse(this.LoginService.GetSesionActual())?.correo
  }

  ngOnInit(): void {
    this.list = new ListDGenerate()
    setTimeout(() => {
      this.refreshList();
    }, 1400);
  }

  accion(value : any){
    this.seleccionModificar(value)
  }

  seleccionModificar(value : any){
    this.nombre = value.retorno
    let Usuario : any ={marca : ['Fiat','Renaut','Hyundai'],anio : [1999,2000,2001,2002,2003,2004,2005,2006,2007],asientos : [2,3,4,5]}

    this.form = new FormGenerate(this.fb.group({
      marca : ['', [
        Validators.required,
      ]],
      anio : ['',[
        Validators.required,
      ]],
      asientos : ['',[
        Validators.required,
      ]],
      modelo : ['',[
        Validators.required,
      ]],
      foto : ['',[
        Validators.required,
      ]],
    }),['select','select','select','text','file'],['marca','anio','asientos','modelo','foto'],Usuario)
  }

  modifcar(materia){
    this.MateriasService.addFile('/autos/'+this.nombre+this.correo,materia.foto).then((e)=>{
      e.ref.getDownloadURL().then(aux => {
        console.log(aux)
        this.MateriasService.modElement('/autos/'+this.nombre+this.correo.replace('.','_'),{marca : materia.marca, anio : materia.anio,asientos : materia.asientos,modelo : materia.modelo,url : aux}).then(()=>{
          this.error = 'Se a modifcado '+this.nombre
          setTimeout(() => {
            this.refreshList()
            this.error = ''
          }, 1000);
        })
      })
    }).catch(aux=>{
      console.log(aux)
    }).finally(()=>{
      this.form = null
    })
  }

  refreshList(){
    let aux = this.MateriasService.getListAutos().filter(aux => aux.email == this.correo)
    if(aux.length == 0 ){
      this.error = 'No tiene autos'
    }else{
      this.listado = aux
      this.list.changeList(true,['text','text','text','text','text','text','img'],['Modificar'],[5])
      this.error = ''
    }
  }

}
