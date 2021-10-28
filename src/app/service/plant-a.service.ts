import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlantA } from './../entities/PlantA';

@Injectable({
  providedIn: 'root'
})
export class PlantAService {
  constructor(private httpClient: HttpClient) { }
  getPlanteA() {
    return this.httpClient.get<PlantA[]>('http://localhost:9999/planteaccessoireservice/api/acessoirePlantes');
  }

  
}