import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { User } from '../User-Auth/model/user.model';
import { UserServiceService } from '../User-Auth/UserService/user-service.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  username: string;
  errorMsg: string;
  loggedIn: boolean;
  userLoggedIn: User;
  adminLoggedIn:boolean;
  doctorLoggedIn:boolean;

  constructor(private appService:AppServiceService,private router:Router,
    private userService:UserServiceService) { 
       
    }

  ngOnInit(): void {

    this.appService.LoggedIn.subscribe(data=>{
      let status = localStorage.getItem("isLoggedIn");
      if(status){
        this.loggedIn = true;
        let token = localStorage.getItem("token");
        
        token = atob(token);
        this.username = token.split(":")[0];

      }else{
        this.loggedIn = false;
      }
    });

      this.userService.getUserByUsername(this.username).subscribe(data=>{
        this.userLoggedIn = data;
        
        if(this.userLoggedIn.role.toLowerCase() === "admin"){
          this.adminLoggedIn = true;
          //this.doctorLoggedIn = false;
        }else{
          this.doctorLoggedIn = true;
          //this.adminLoggedIn = false;
        }
    });

  }

  onLogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    this.loggedIn = false;

    this.adminLoggedIn = false;
    this.doctorLoggedIn = false;
  }

  
}
