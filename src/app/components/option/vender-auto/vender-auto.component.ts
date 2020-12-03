import { LoginService } from './../../../service/login.service';
import { MateriasService } from './../../../service/materias.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGenerate } from 'src/app/GenericModule/generics/genericformclass/formGenerate';

@Component({
  selector: 'app-vender-auto',
  templateUrl: './vender-auto.component.html',
  styleUrls: ['./vender-auto.component.scss']
})
export class VenderAutoComponent implements OnInit {

  form : FormGenerate
  error : string = ''
  email : string

  constructor(private MateriasService : MateriasService, private LoginService : LoginService,public fb : FormBuilder) { }

  ngOnInit(): void {
    let aux : any= this.LoginService.GetSesionActual()
    aux = JSON.parse(aux)
    this.email = aux?.correo
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
      patente : ['',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ]],
      foto : ['',[
        Validators.required,
      ]],
    }),['select','select','select','text','text','file'],['marca','anio','asientos','modelo','patente','foto'],Usuario)
  }

  registrarAuto(){
    let flag = true
    this.MateriasService.getListAutos().forEach(aux =>{
      if(aux.patente == this.form.FormDynamic.value.patente){
        flag = false
      }
    })

    if(flag){
      this.MateriasService.addFile('/autos/'+this.form.FormDynamic.value.patente+this.email,this.form.FormDynamic.value.foto).then((e)=>{
        e.ref.getDownloadURL().then(aux => {
          console.log(aux)
          this.MateriasService.addElemento('/autos/'+this.form.FormDynamic.value.patente+this.email.replace('.','_'),{marca :this.form.FormDynamic.value.marca,anio :this.form.FormDynamic.value.anio,asientos :this.form.FormDynamic.value.asientos,modelo :this.form.FormDynamic.value.modelo,patente :this.form.FormDynamic.value.patente,email : this.email,url : aux}).then(()=>{
            this.error = 'Se a agregado el auto con la patente '+ this.form.FormDynamic.value.patente
          }).catch(()=>{
            this.error = 'No se a podido agregar '
          })
        })
      }).catch(aux=>{
        console.log(aux);
      })

    }else{
      this.error = 'Ya existe auto con la patente'+this.form.FormDynamic.value.patente
    }
  }
}
