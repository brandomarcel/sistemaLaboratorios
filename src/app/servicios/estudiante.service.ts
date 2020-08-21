import { Estudiante } from './../models/estudiante';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private httpClient:HttpClient) { 

     }

     api="http://127.0.0.1:8000/api/";


     getEstudiante(){
      return this.httpClient.get(this.api+'devuelveEstudiantes');
    }

    postEstudiante(estudiante:Estudiante){

    return this.httpClient.post(this.api+'guardaEstudiantes',estudiante);

    }

    putEstudiante(estudiante:Estudiante){
      return this.httpClient.put<Estudiante>(this.api + 'actualizaEstudiantes/'+estudiante.id,estudiante)
    }

    DelEstudiante(estudiante:Estudiante){
      return this.httpClient.delete<Estudiante>(this.api + 'eliminaEstudiantes/'+estudiante.id)
    }
   



}
