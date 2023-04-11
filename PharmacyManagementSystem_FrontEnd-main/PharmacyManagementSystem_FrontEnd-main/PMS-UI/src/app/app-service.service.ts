import { Binary } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  LoggedIn = new BehaviorSubject<boolean>(false);

  RoleNum = new BehaviorSubject<number>(0);
  

  constructor() { }
}
