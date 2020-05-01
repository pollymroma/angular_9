import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

export interface IUsuario {  //Usa esto para no crear un componente usuarios?
  nombre: string,
  foto: string,
  descripcion: string,
  coordenadas: string,
  comentarios: string
}

@Injectable({
  providedIn: 'root' //autoprovisto
})
export class UsuariosService {

  private url: string = 'https://5e94a124f591cb0016d8141e.mockapi.io/usuarios/'

  //inyecto dependencia en el servicio de lo que importo de HttpClient
  constructor(private http: HttpClient) { }

  /* SERVICIO API REST (es todo esto)*/

  /* Opciones de Headers de Request */
  getHttpOptions() { //headers de transmision
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json' //transmitimos los datos en formato json
      })
    }
    return httpOptions 
  }

  /* Callback para manejo de errores de comunicacion */
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('error de frontend', error.error.message)
    } else {
      console.log(`error de backend ${error.status}, cuerpo de error: ${error.message}`)
    }
    return throwError('Error de comunicacion Http')
  }

  /* METODO GET */
  getUsuarios() {
    //return this.http.get<object[]>(this.url) //devuelve un observable y le digo como vuelve con el <object[]>
    return this.http.get<IUsuario[]>(this.url).pipe(
      //operador de los observables, agarra el error
      catchError(this.handleError)
    )
  }

  /* METODO POST */
  postUsuario(usuario: IUsuario) {
    //devuelve el mismo objeto que le mando como respuesta, devuelve un observable
    return this.http.post<IUsuario>(this.url, usuario, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    )
  }

  /* METODO PUT */
  putUsuario(id: number, usuario: IUsuario) {
    return this.http.put<IUsuario>(this.url+id, usuario, this.getHttpOptions()).pipe(
      catchError(this.handleError)
    )
  }

  /* METODO DLETE */
  deleteUsuario(id: number) {
    return this.http.delete(this.url+id).pipe(
      catchError(this.handleError)
    )
  }
}
