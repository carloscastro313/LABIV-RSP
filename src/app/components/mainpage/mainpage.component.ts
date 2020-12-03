import { Component, OnInit } from '@angular/core';
import { NavGenerate } from 'src/app/GenericModule/generics/generic-nav/NavGenerate';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  nav : NavGenerate
  constructor() {
    this.nav = new NavGenerate(['','login','register','registrarAuto','modificarAuto','eliminarAuto','listadoAutosUsuario','listadoAutos'],['Inicio','Ingresar como usuario','Registrarse','Registrar auto','Modificar auto','Eliminar auto','Listado propietarios','Autos a la venta']);
  }

  ngOnInit(): void {
  }

}
