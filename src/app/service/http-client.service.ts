import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../entities/Animal';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:  HttpClient) { }


   getAnimal()
   {
     return this.httpClient.get<Animal[]>('http://localhost:8081/SpringMVC/servlet/getJena');
   }
}