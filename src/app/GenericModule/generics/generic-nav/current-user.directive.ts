import { LoginService } from '../../../service/login.service';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCurrentUser]'
})
export class CurrentUserDirective {

  email : string
  constructor(public el : ElementRef, public renderer : Renderer2, private LoginService : LoginService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let aux : any= this.LoginService.GetSesionActual()
    aux = JSON.parse(aux)
    this.email = aux?.correo
    if(this.email != null){
      this.renderer.setProperty(this.el.nativeElement,'innerHTML',this.email)
    }else{
      this.renderer.setProperty(this.el.nativeElement,'innerHTML','Invitado')
    }

  }
}
