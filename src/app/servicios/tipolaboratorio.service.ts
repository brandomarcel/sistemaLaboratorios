import { Tipolaboratorio } from './../models/tipolaboratorio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipolaboratorioService {

  constructor(private httpClient:HttpClient) { }


  
  api="http://127.0.0.1:8000/api/";
  
  getTipolaboratorio(){
      return this.httpClient.get(this.api+'devuelvetipoLaboratorios');
  //return this.httpClient.get("http://localhost/Servicios/Clientes/Clientes.php");
      
    }
}
