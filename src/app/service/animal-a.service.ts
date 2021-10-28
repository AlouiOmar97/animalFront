import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnimalA } from './../entities/AnimalA';

@Injectable({
  providedIn: 'root'
})
export class AnimalAService {

  constructor(private httpClient: HttpClient) { }
  getAnimalA()
   {
     return this.httpClient.get<AnimalA[]>('http://localhost:9999/animals/api/animls');
   }

   getAnimalADetails(id:any)
   {
     return this.httpClient.get<AnimalA[]>('http://localhost:8098/getAnimalProductById/'+id);
   }
}
