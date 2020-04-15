import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ClientesService, ClientesServiceUseClass, ClientesServiceUseExisting, functionClientesServiceUseFactory } from './servicios/clientes.service';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component'
import { UsuariosService } from './servicios/usuarios.service';
import { PanelComponent } from './mimodulo/componentes/panel/panel.component';
import { MimoduloModule } from './mimodulo/mimodulo.module';

const routes: Routes = [
  {path: '', redirectTo: 'entradas', pathMatch: 'full'}, //si es barra redirige a esta. el match full es porque la barra esta en todas, todo empieza con barra
  //{path: '', component: ClientesComponent} //cuando no hay barra algo, va a uno de esos
  {path: 'entradas/:id', component: EntradasComponent}, //le paso parametros obligatorios y en la ruta del navbar tambien le tiene que llegar el parametro
  //:id? para parametro opcional
  {path: 'entradas', component: EntradasComponent},
  {path: 'estructura', component: EstructuraComponent},
  {path: 'atributos', component: AtributosComponent},
  {path: 'formularios', component: FormulariosComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'panel', component: PanelComponent}
  //{path: 'familia', component: FamiliaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClientesComponent,
    UsuariosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    MimoduloModule
    //Mimodulo2Module
  ],
  providers: [
    //ClientesService
    {provide: ClientesService, useClass: ClientesService}  //cuando coincide es lo mismo

    /* USE CLASS */
    //{provide: ClientesService, useClass: ClientesServiceUseClass} //digo nombre y que clase usa, podria ser otra diferente
  
    /* USE EXSITING */
    //{provide: ClientesService, useExisting: ClientesServiceUseExisting} //como un alias
  
    /* USE FACTORY */
    //{provide: ClientesService, useFactory: functionClientesServiceUseFactory} //voy a tener una funcion que devuelve una instancia de una clase

    /* USE VALUE */
    /*{provide: ClientesService, useValue: { //declara la clase como un objeto
      clientes : [
          'Pedro_useValue',
          'Juan_useValue',
          'Ana_useValue',
          'Lucia_useValue',
          'Pablo_useValue'
        ],
        
        getClientes() {
          return this.clientes
        },
    
        pushCliente(cliente: string):void {
          this.clientes.unshift(cliente)
        },
    
        popCliente():void { //saco el ultimo cliente
          this.clientes.shift()
        }
      }
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
