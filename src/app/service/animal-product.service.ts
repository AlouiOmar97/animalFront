import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Animal } from '../entities/Animal';
@Injectable({
  providedIn: 'root'
})
export class AnimalProductService {

  constructor(private httpClient:  HttpClient) { }


   getAnimalProducts()
   {
     return this.httpClient.get<Animal[]>('http://localhost:9999/animal/getAllAnimalProducts');
   }

   getAnimalProductDetails(id:any)
   {
     return this.httpClient.get<Animal[]>('http://localhost:9999/animal/getAnimalProductById/'+id);
   }
}
