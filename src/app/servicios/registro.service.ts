import { Detalleregistro } from './../models/detalleregistro';
import { Registro } from './../models/registro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(public httpClient:HttpClient) { }


  api="http://127.0.0.1:8000/api/";



  getRegistro(){
    return this.httpClient.get(this.api+'devuelveRegistros');
  }
  getUltimoregistro(){
    return this.httpClient.get(this.api+'devuelveUltimoReg');
  }


  getRegistroxId(id:number){
    return this.httpClient.get(this.api+'devuelveRegistroxidreg/'+id);
  }

  getDetalleregistro(id:number){
    return this.httpClient.get(this.api+'devuelveMaquinasxidLab/'+id);
  }


  postRegistro(registro:Registro){

    return this.httpClient.post(this.api+'guardaRegistro',registro);
  
    }

    postDetalleregistro(detalleregistro:Detalleregistro){

      return this.httpClient.post(this.api+'guardaDetalleregistro',detalleregistro);
    
      }

      putEstadoregistro(id:number){
        return this.httpClient.put(this.api + 'actualizaEstado/'+id,null);
      }




}


