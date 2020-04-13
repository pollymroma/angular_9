import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']/*,
  providers: []*/ //proveer servicios solo para este componente
})
export class ClientesComponent implements OnInit {

  clientes : string[] = []
  client: string

  constructor(private clientesService: ClientesService) {
    this.clientes = this.clientesService.getClientes()
  }

  ngOnInit(): void {
  }

  agregarCliente(client:string) {
    this.clientesService.pushCliente(client)
  }

}
