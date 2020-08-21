import { Laboratorio } from './../models/laboratorio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  constructor(private httpClient:HttpClient) { }


  api="http://127.0.0.1:8000/api/";


    // getLaboratorio(){
      //return this.httpClient.get(this.api+'devuelveLaboratorios');
   // }
    getLaboratorio(){
      return this.httpClient.get(this.api+'devuelveLaboratoriosjoin');
    }

    getLaboratorioDisponibilidad(){
      return this.httpClient.get(this.api+'devuelveLaboratoriosdisponibilidad');
    }

    getLaboratorioxId(id:number){
      return this.httpClient.get(this.api+'devuelveLaboratoriosxId/'+id);
    }
    
    getLaboratorioOcupados(){
      return this.httpClient.get(this.api+'laboratorioOcupado');
    }
    

    postLaboratorio(laboratorio:Laboratorio){

    return this.httpClient.post(this.api+'guardaLaboratorios',laboratorio);

    }

    putLaboratorio(laboratorio:Laboratorio){
      return this.httpClient.put<Laboratorio>(this.api + 'actualizaLaboratorios/'+laboratorio.id,laboratorio)
    }

    putLaboratorioEstado(id:number){
      return this.httpClient.put(this.api + 'actualizaLaboratoriosInsertar/'+id,null);
    }

    DelLaboratorio(laboratorio:Laboratorio){
      return this.httpClient.delete<Laboratorio>(this.api + 'eliminaLaboratorios/'+laboratorio.id)
    }
}
