import { Injectable } from '@angular/core';

/* CONFIGURACION USE EXSISTING */
@Injectable({
  providedIn: 'root'
})
export class ClientesServiceUseExisting {

  clientes : string[] = [
    'Pedro_useExisting',
    'Juan_useExisting',
    'Ana_useExisting',
    'Lucia_useExisting',
    'Pablo_useExisting'
  ]

  constructor() { }

  getClientes() {
    return this.clientes
  }

  pushCliente(cliente: string):void {
    this.clientes.unshift(cliente)
  }

  popCliente():void { //saco el ultimo cliente
    this.clientes.shift()
  }
}

/* CONFIGURACION USE CLASS */
export class ClientesServiceUseClass {

  clientes : string[] = [
    'Pedro_useClass',
    'Juan_useClass',
    'Ana_useClass',
    'Lucia_useClass',
    'Pablo_useClass'
  ]

  constructor() { }

  getClientes() {
    return this.clientes
  }

  pushCliente(cliente: string):void {
    this.clientes.push(cliente)
  }

  popCliente():void { //saco el ultimo cliente
    this.clientes.pop()
  }
}

/* CONFIGURACION ORIGINAL */
@Injectable(/*{
  providedIn: 'root'
}*/)
export class ClientesService {

  clientes : string[] = [
    'Pedro',
    'Juan',
    'Ana',
    'Lucia',
    'Pablo'
  ]

  constructor() { }

  getClientes() {
    return this.clientes
  }

  pushCliente(cliente: string):void {
    this.clientes.push(cliente)
  }

  popCliente():void { //saco el ultimo cliente
    this.clientes.pop()
  }
}

/* CONFIGURACION USE FACTORY */
class ClientesServiceUseFactory {

  clientes : string[] = [
    'Pedro_useFactory',
    'Juan_useFactory',
    'Ana_useFactory',
    'Lucia_useFactory',
    'Pablo_useFactory'
  ]

  constructor() { }

  getClientes() {
    return this.clientes
  }

  pushCliente(cliente: string):void {
    this.clientes.push(cliente)
  }

  popCliente():void { //saco el ultimo cliente
    this.clientes.pop()
  }
}

export function functionClientesServiceUseFactory() {
  console.log("Aqui puedo ejecutar inicializaciones previas al servicio")
  return new ClientesServiceUseFactory() //devuelve instancia de clase
}
