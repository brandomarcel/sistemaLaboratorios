import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiaService {

  constructor(private httpClient:HttpClient) { }

  api="http://127.0.0.1:8000/api/";


  getDias(){
   return this.httpClient.get(this.api+'devuelveDias');
 }
}
