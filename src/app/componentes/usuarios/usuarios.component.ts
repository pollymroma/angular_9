import { Component, OnInit } from '@angular/core';
import { UsuariosService, IUsuario } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: IUsuario[] = []

  //inyecto el servicio
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void { // ciclo de vida de angular life cycle hook
    //this.obtenerUsuarios()
  }

  obtenerUsuarios() {
    /*this.usuariosService.getUsuarios() //nos devuelve el observable (la promesa haces .then, aca .subscribe)
    .subscribe( usuarios => {
      console.log(usuarios)
      this.usuarios = usuarios
    })*/
    this.usuariosService.getUsuarios() //nos devuelve el observable (la promesa haces .then, aca .subscribe)
    .subscribe( (usuarios:IUsuario[]) => {
      console.log(usuarios)
      this.usuarios = usuarios
    })
  }

  enviarUsuario() {
    let usuario = { //sin fecha ni id
      nombre: "Daniel",
      foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png",
      descripcion: "Profesor Curso Angular",
      coordenadas: "1234567",
      comentarios: "Bienvenidos al curso!"
    }
    this.usuariosService.postUsuario(usuario)
    .subscribe( (usuario:IUsuario) => {
      console.log(usuario)
      this.obtenerUsuarios()
    })
  }

  borrarUsuario(id: number) {
    this.usuariosService.deleteUsuario(id)
    .subscribe( (usuario:IUsuario) => {
      console.log(usuario)
      this.obtenerUsuarios()
    })
  }

  actualizarUsuario(id: number) {
    let usuario = { //sin fecha ni id
      nombre: "Gabriela",
      foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png",
      descripcion: "Alumna Curso Angular",
      coordenadas: "7654321",
      comentarios: "Como estan!"
    }
    this.usuariosService.putUsuario(id, usuario)
    .subscribe( (usuario:IUsuario) => {
      console.log(usuario)
      this.obtenerUsuarios()
    })
  }
}
