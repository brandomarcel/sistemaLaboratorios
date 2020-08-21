import { Docente } from './../models/docente';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private httpClient:HttpClient) { }

  api="http://127.0.0.1:8000/api/";


  getDocente(){
   return this.httpClient.get(this.api+'devuelveDocentes');
 }

 postDocente(docente:Docente){

  return this.httpClient.post(this.api+'guardaDocentes',docente);

  }

  putDocente(docente:Docente){
    return this.httpClient.put<Docente>(this.api + 'actualizaDocentes/'+docente.id,docente)
  }

  DelDocente(docente:Docente){
    return this.httpClient.delete<Docente>(this.api + 'eliminaDocentes/'+docente.id)
  }


}
