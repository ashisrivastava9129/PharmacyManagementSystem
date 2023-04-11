import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Admin } from '../model/admin.model';

export class User{
  constructor(
    public status:string,
     ) {}
  
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  postAdminApi:string;
  getAllAdminApi: string;
  getAdminByUsernameApi:string; 
  updateAdminApi:string;

  constructor(private http: HttpClient) {
    this.postAdminApi = 'http://localhost:8082/adminlogin';
    this.getAllAdminApi = 'http://localhost:8082/adminlogin';
    this.getAdminByUsernameApi = 'http://localhost:8082/adminlogin/username/';
    this.updateAdminApi = "http://localhost:8082/adminlogin/username/";
   }

  postAdmin(admin: Admin): Observable<Admin>{
    return this.http.post<Admin>(this.postAdminApi, admin);
  }

  getAllAdmin():Observable<Admin[]>{
    return this.http.get<Admin[]>(this.getAllAdminApi);
  }

  getAdminByUsername(username:string): Observable<Admin>{
   
    return this.http.get<Admin>(this.getAdminByUsernameApi + username);
  }

  updateAdmin(username:string,updatedAdmin:Admin): Observable<Admin>{
    return this.http.put<Admin>(this.updateAdminApi + username,updatedAdmin);
  }

  authenticate(username, password) {
    return this.http.post<any>('http://localhost:8082/authenticate',{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }
  isAdminLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
  
}
