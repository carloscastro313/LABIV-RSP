import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { GenericsModule } from './GenericModule/generics/generics.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { StartMenuComponent } from './components/option/start-menu/start-menu.component';
import { UserDirective } from './components/option/start-menu/user.directive';
import { VenderAutoComponent } from './components/option/vender-auto/vender-auto.component';
import { ModificarCocheComponent } from './components/option/modificar-coche/modificar-coche.component';
import { EliminarCocheComponent } from './components/option/eliminar-coche/eliminar-coche.component';
import { ListadoUsuarioCocheComponent } from './components/option/listado-usuario-coche/listado-usuario-coche.component';
import { FiltroPipe } from './components/option/listado-usuario-coche/filtro.pipe';
import { ListadoCocheComponent } from './components/option/listado-coche/listado-coche.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    StartMenuComponent,
    UserDirective,
    VenderAutoComponent,
    ModificarCocheComponent,
    EliminarCocheComponent,
    ListadoUsuarioCocheComponent,
    FiltroPipe,
    ListadoCocheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GenericsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
