import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  mensaje : string = 'Soy un mensaje'
  valor1: number = 234
  valor2: number = 345
  valor3: number = 456
  valor4: number = 567
  contador: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  modificar(e:any): void { // el void y any no son imprescindibles
    let dato = e.target.value
    console.log('modificar input ', dato)
    this.valor3 = dato
  }

}
