import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient:  HttpClient) { }


  getReviews()
  {
    return this.httpClient.get('http://localhost:8096/getAllReviews');
  }

  getProductReviews(id:any)
  {
    return this.httpClient.get('http://localhost:8096/getAllProductReviews/'+id);
  }

  addReview(data:any)
  {
    return this.httpClient.post('http://localhost:8096/ajouterReviewr',data);
  }

}
