import { Horarios } from './../models/horarios';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  api="http://127.0.0.1:8000/api/";

  constructor(public httpClient:HttpClient) { }


  getHorarioxMateria(id:number){
    return this.httpClient.get(this.api+'devuelveHorariosxidMateria/'+id);
  }

  getHorarioxDia(id:number){
    return this.httpClient.get(this.api+'devuelveHorariosxDia/'+id);
  }

  getxLabxDia(lab:number, dia:string ){
    return this.httpClient.get(this.api+'devuelvedatosxDiaxLab/'+dia+'/'+lab);
  }


  
}
