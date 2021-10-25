import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient:  HttpClient) { }


  getReviews()
  {
    return this.httpClient.get('http://localhost:8099/getAllReviews');
  }

}
