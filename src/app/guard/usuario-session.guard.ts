import { LoginService } from './../service/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioSessionGuard implements CanActivate {
  constructor(private LoginService : LoginService,private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let aux = JSON.parse(this.LoginService.GetSesionActual());
    if(aux?.perfil == 'usuario'){
      this.router.navigate(['/']);
      return false;
    }else{
      return true;
    }
  }

}
