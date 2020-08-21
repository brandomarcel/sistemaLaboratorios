import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }
  api="http://127.0.0.1:8000/api/";

  getUsuario(){
    return this.httpClient.get(this.api+'devuelveUsuarios');
  }

  getUsuarioxId(id:number){
    return this.httpClient.get(this.api+'devuelveUsuariosxId/'+id);
  }

  postUsuario(usu:Usuario){
    return this.httpClient.post<Usuario>(this.api+'guardaUsuarios',usu);
  }
 
  putUsuario(usu:Usuario){
    return this.httpClient.put<Usuario>(this.api + 'actualizaUsuarios/'+usu.id,usu)
  }

  DelUsuarios(usu:Usuario){
    return this.httpClient.delete<Usuario>(this.api + 'eliminaUsuarios/'+usu.id)
  }

}



