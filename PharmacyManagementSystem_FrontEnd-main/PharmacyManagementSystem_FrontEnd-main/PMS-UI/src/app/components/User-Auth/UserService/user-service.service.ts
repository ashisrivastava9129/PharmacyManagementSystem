import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  postUserApi:string;
  getAllUserApi: string;
  getUserByUsernameApi:string; 
  updateUserApi:string;

  constructor(private http: HttpClient) { 
    this.postUserApi = 'http://localhost:8082/user';
    this.getAllUserApi = 'http://localhost:8082/user';
    this.getUserByUsernameApi = 'http://localhost:8082/user/username/';
    this.updateUserApi = "http://localhost:8082/user/username/";
  }

  postUser(user: User): Observable<User>{
    return this.http.post<User>(this.postUserApi, user);
  }

  getAllUser():Observable<User[]>{
    return this.http.get<User[]>(this.getAllUserApi);
  }

  getUserByUsername(username:string): Observable<User>{
   
    return this.http.get<User>(this.getUserByUsernameApi + username);
  }

  updateUser(username:string,updatedUser:User): Observable<User>{
    return this.http.put<User>(this.updateUserApi + username,updatedUser);
  }

}
