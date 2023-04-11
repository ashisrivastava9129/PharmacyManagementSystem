import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { suppliers } from '../models/suppliers.model';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  private getAllSuppliersApi : string;
  private postSuppliersApi : string;
  private updateSuppliersApi : string;
  private deleteSuppliersApi : string;
  private getSuppliersByIdApi : string;

  constructor(private http : HttpClient) { 
      this.getAllSuppliersApi = "http://localhost:1111/suppliers";
      this.getSuppliersByIdApi = "http://localhost:1111/suppliers/id/";
      this.postSuppliersApi = "http://localhost:1111/suppliers";
      this.updateSuppliersApi = "http://localhost:1111/suppliers/";
      this.deleteSuppliersApi = "http://localhost:1111/suppliers/";
  }

  public getAllSuppliers(): Observable<suppliers[]> {
    return this.http.get<suppliers[]>(this.getAllSuppliersApi);
  }
  public getSuppliersById(id:string): Observable<suppliers> {
    return this.http.get<suppliers>(this.getSuppliersByIdApi + id);
  }
  
  public postSuppliers(suppliers:suppliers): Observable<suppliers>{
    return this.http.post<suppliers>(this.postSuppliersApi, suppliers);
  }

  public updateSuppliers(id:string,updatedSuppliers:suppliers){
      return this.http.put<suppliers>(this.updateSuppliersApi + id, updatedSuppliers);
  }

  public deleteSuppliers(id:string){
    return this.http.delete<suppliers>(this.deleteSuppliersApi + id);
}

}

