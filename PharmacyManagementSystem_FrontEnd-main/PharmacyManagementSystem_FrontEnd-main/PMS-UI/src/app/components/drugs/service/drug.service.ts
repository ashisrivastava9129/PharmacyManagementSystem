import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { drug } from '../models/drug.model';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  
  private getAllDrugsApi : string;
  private getDrugByIdApi : string;
  private postDrugApi : string;
  private updateDrugApi : string;
  private deleteDrugApi : string;

  constructor(private http : HttpClient) { 
      this.getAllDrugsApi = "http://localhost:8081/drug";
      this.getDrugByIdApi = "http://localhost:8081/drug/id/";
      this.postDrugApi = "http://localhost:8081/drug";
      this.updateDrugApi = "http://localhost:8081/drug/";
      this.deleteDrugApi = "http://localhost:8081/drug/";
  }

  public getAllDrugs(): Observable<drug[]> {
    return this.http.get<drug[]>(this.getAllDrugsApi);
  }
  public getDrugById(id:string): Observable<drug> {
    return this.http.get<drug>(this.getDrugByIdApi + id);
  }
  public postDrug(drug:drug): Observable<drug>{
    return this.http.post<drug>(this.postDrugApi, drug);
  }

  public updateDrug(id:string,updatedDrug:drug){
      return this.http.put<drug>(this.updateDrugApi + id, updatedDrug);
  }

  public deleteDrug(id:string){
    return this.http.delete<drug>(this.deleteDrugApi + id);
}

}
