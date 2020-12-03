import { LoginService } from './../../../service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {

  email : string
  flag : boolean
  constructor(private LoginService : LoginService) { }

  ngOnInit(): void {
    this.email = ''
    let aux : any= this.LoginService.GetSesionActual()
    aux = JSON.parse(aux)
    this.email = aux?.correo
    if(aux?.correo != null){
      this.email = aux?.correo
    }else{
      this.email = 'Invitado'
    }
  }

}
