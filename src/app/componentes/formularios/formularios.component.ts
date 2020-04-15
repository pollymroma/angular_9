import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerificarEspacios } from 'src/app/validaciones/espacios.validator';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = {
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    password: ''
  }
  minimoCaracteresNombre : number = 3
  maximoCaracteresNombre : number = 10

  f: FormGroup //accede a estados de cada campo del formulario
  constructor(private fb: FormBuilder) { 
    this.f = fb.group({ //la configuracion del formulario, que va a guardar y donde
      nombre: ['', Validators.compose([ //le paso array de validadores
          Validators.required,
          Validators.minLength(this.minimoCaracteresNombre),
          Validators.maxLength(this.maximoCaracteresNombre),
          VerificarEspacios
        ])
      ],
      apellido: '',
      edad: '',
      /*contacto: { //esto no se hace asi
        email: '',
        telefono: ''
      },*/
      contacto: fb.group({
        email: '',
        telefono: '' //el formControlName tiene que ser este nombre
      }),
      password: ''
    })
  }

  ngOnInit(): void {
    //GET CON FETCH
    fetch('https://5e94a124f591cb0016d8141e.mockapi.io/posts')
    .then(response => response.json())
    .then(rta => console.log(rta))
  }

  enviar() {
    console.log(this.formu)
    this.formu = {
      nombre: '',
      apellido: '',
      edad: '',
      email: '',
      password: ''
    }
  }

  enviar2() {
    console.log(this.f.value)
    //POST CON FETCH
    fetch('https://5e94a124f591cb0016d8141e.mockapi.io/posts', {
      method: 'post',
      body: JSON.stringify(this.f.value), //necesario porque espera un json
      headers: {
        'Content-Type': 'application/json'
      }
    }) //es una promesa
    .then( response => response.json())
    .then( rta => {
      console.log(rta)
      this.f.reset() //reset de todo el form
      //this.f.controls.nombre.reset() //para resettear un solo campo
      /*this.f.reset({ //reset de todo el form y te pone el valor inicial que quieras
        nombre: 'Ingrese nombre'
      })*/
    })
  }
}
