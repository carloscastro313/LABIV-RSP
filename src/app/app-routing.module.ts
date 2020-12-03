import { UsuarioSessionGuard } from './guard/usuario-session.guard';
import { ListadoCocheComponent } from './components/option/listado-coche/listado-coche.component';
import { ListadoUsuarioCocheComponent } from './components/option/listado-usuario-coche/listado-usuario-coche.component';
import { EliminarCocheComponent } from './components/option/eliminar-coche/eliminar-coche.component';
import { ModificarCocheComponent } from './components/option/modificar-coche/modificar-coche.component';
import { VenderAutoComponent } from './components/option/vender-auto/vender-auto.component';
import { StartMenuComponent } from './components/option/start-menu/start-menu.component';
import { SessionGuardGuard } from './guard/session-guard.guard';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '',component:MainpageComponent, children :[
      {path: '',component: StartMenuComponent,pathMatch:'full'},
      {path: 'register',component: RegisterComponent,pathMatch:'full',canActivate: [UsuarioSessionGuard]},
      {path: 'login',component: LoginComponent,pathMatch:'full',canActivate: [UsuarioSessionGuard]},
      {path: 'registrarAuto',component: VenderAutoComponent,pathMatch:'full',canActivate: [SessionGuardGuard]},
      {path: 'modificarAuto',component: ModificarCocheComponent,pathMatch:'full',canActivate: [SessionGuardGuard]},
      {path: 'eliminarAuto',component: EliminarCocheComponent,pathMatch:'full',canActivate: [SessionGuardGuard]},
      {path: 'listadoAutosUsuario',component: ListadoUsuarioCocheComponent,pathMatch:'full',canActivate: [SessionGuardGuard]},
      {path: 'listadoAutos',component: ListadoCocheComponent,pathMatch:'full'},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
