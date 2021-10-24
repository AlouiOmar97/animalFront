import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private http: HttpClient) {}

  public pay(info:any) :Observable<any>{
    
      return this.http.post("http://localhost:4000/api/pay/payment" , info);
    }
}
