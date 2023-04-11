import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserServiceService } from '../UserService/user-service.service';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  user: User;
  username:string;

  constructor(private router: Router,private userService:UserServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    
    let token = localStorage.getItem("token");
    if(token){
      return true;
    }
    
    this.router.navigateByUrl("/login");
    return false;
  

    }
  
}
