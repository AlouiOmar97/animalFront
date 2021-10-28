import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private http: HttpClient) {}

  public pay(info:any) :Observable<any>{
    
      return this.http.post("http://localhost:3100/api/payment/payment" , info);
    }

    public getAll() {
      return this.http.get(`http://localhost:9999/payment/api/order/getOrders`);
    }

    public delete(id:any) {
      const url='http://localhost:3100/api/order/deleteOrder/'+id;
      return this.http.delete(url);
    }
}
