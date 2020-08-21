import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VerhorariosService {

  constructor(private httpClient:HttpClient) { }

  api="http://127.0.0.1:8000/api/";

  getLibres(dia:number){
    return this.httpClient.get<{HttpResponse,horaslibres}>(this.api+'devuelveHorasLibres/'+dia);
  }
  
  getOcupados(dia:number,lab:number){
    return this.httpClient.get<{HttpResponse,horarasOcupadas}>(this.api+'devuelveHorasOcupadas/'+dia+"/"+lab);
  }

  getdevuelvedia(materia:number){
    return this.httpClient.get<{HttpResponse,horarasOcupadas}>(this.api+'devuelvedia/'+materia);
  }

 
  getdevuelvedatosfalta(materia:number,dia:any){
    return this.httpClient.get<{HttpResponse,horarasOcupadas}>(this.api+'devuelvedatosfalta/'+materia+"/"+dia);
  }
  
  
}
