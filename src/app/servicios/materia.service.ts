import { Docente } from './../models/docente';
import { Materia } from './../models/materia';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private httpClient:HttpClient) { }

  api="http://127.0.0.1:8000/api/";



  getMateria(){
    return this.httpClient.get(this.api+'devuelveMaterias');
  }

  getMateriaxDocente(id:number){
    return this.httpClient.get(this.api+'devuelveMateriasxDocente/'+id);
  }
  getMateriaxMateria(id:number){
    return this.httpClient.get(this.api+'devuelveMateriasxMateria/'+id);
  }
  

 postmateria(materia:Materia){

  return this.httpClient.post(this.api+'guardaLaboratorios',materia);

  }
 
  putMateria(materia:Materia){
    return this.httpClient.put<Materia>(this.api + 'actualizaLaboratorios/'+materia.id,materia)
  }


  DelMateria(materia:Materia){
    return this.httpClient.delete<Materia>(this.api + 'eliminaMaterias/'+materia.id)
  }


}
