import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { LoginService } from '../../service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error : string = '';
  myForm : FormGroup;

  constructor(
    private loginService : LoginService,
    private router: Router,
    private fb : FormBuilder
    ) {
    }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      correo : ['',[
        Validators.required,
        Validators.email,
      ]],
      clave : ['',[
        Validators.required,
        Validators.minLength(6)
      ]],
    })
  }

  Cerrar(){
    this.router.navigate(['login']);
  }

  btn_registrar(){
    this.error = '';

    if(this.myForm.valid){
      let correo = this.myForm.get('correo').value;
      let clave = this.myForm.get('clave').value;
      this.loginService.AgregarUsuario(correo,clave)
        .then(()=>{
          let user = new Usuario(correo,'usuario');
          this.loginService.guardarUsuario(user);
          console.log("OK!!!");
          this.Cerrar();
        }).catch(()=>{
          console.log("ERROR");
          this.error = 'Ya existe usuario';
        });
    }
  }
}
