import { Invitado } from './../models/invitado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvitadoService {

  constructor(private httpClient:HttpClient) { }


  
  api="http://127.0.0.1:8000/api/";


  getInvitado(){
   return this.httpClient.get(this.api+'devuelveInvitados');
 }
}
