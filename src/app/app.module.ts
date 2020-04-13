import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EntradasComponent } from './componentes/entradas/entradas.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { ClientesService, ClientesServiceUseClass, ClientesServiceUseExisting, functionClientesServiceUseFactory } from './servicios/clientes.service';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    ClientesComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
