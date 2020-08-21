import { Usuariostodos } from './../models/usuariostodos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuariostodosService {

  constructor(private httpClient:HttpClient) { }

  api="http://127.0.0.1:8000/api/";

  getUsuario(){
    return this.httpClient.get(this.api+'devuelveUsuarios');
  }

  getUsuarioxTipo(tipo:string){
    return this.httpClient.get(this.api+'devuelveUsuariostodos/'+tipo);
  }
  

  postUsuariostodos(estudiante:Usuariostodos){
    return this.httpClient.post<Usuariostodos>(this.api+'guardaUsuariostodos',estudiante);
  }


  putUsuariostodos(estudiante:Usuariostodos){
    return this.httpClient.put<Usuariostodos>(this.api + 'actualizaUsuariostodos/'+estudiante.id,estudiante)
  }

  DelEstudiante(estudiante:Usuariostodos){
    return this.httpClient.delete<Usuariostodos>(this.api + 'eliminaUsuariostodos/'+estudiante.id)
  }
}
