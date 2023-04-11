import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/DoctorInterFace/model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private postOrderApi : string;
  private getAllOrderForUserApi: string;
  private getOrderByIdApi: string;
  private deleteOrderByIdApi: string;

  constructor(private http : HttpClient) {

    this.postOrderApi = "http://localhost:8888/order/"; 
    this.getAllOrderForUserApi = "http://localhost:8888/order/user/";
    this.getOrderByIdApi = "http://localhost:8888/order/oid/";
    this.deleteOrderByIdApi = "http://localhost:8888/order/"; 
   }

   public postOrder(order:Order,id:string): Observable<Order>{
    return this.http.post<Order>(this.postOrderApi + id, order);
  }

  public getOrdersByUserId(uid:string): Observable<Order[]>{
    return this.http.get<Order[]>(this.getAllOrderForUserApi + uid);
  }

  public getOrderById(oid:string): Observable<Order>{
    return this.http.get<Order>(this.getOrderByIdApi + oid);
  }

  public deleteOrder(oid:string): Observable<Order>{
    return this.http.delete<Order>(this.deleteOrderByIdApi + oid);
  }

  
}
