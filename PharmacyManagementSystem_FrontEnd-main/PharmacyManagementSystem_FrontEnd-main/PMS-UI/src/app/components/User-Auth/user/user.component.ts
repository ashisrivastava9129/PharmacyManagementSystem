import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserServiceService } from '../UserService/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username:string;
  loggedIn:boolean;
  user: User;
  errorMsg: string

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {

    // extracting username from localStorage
    let status = localStorage.getItem("isLoggedIn");
      if(status){
        this.loggedIn = true;
        let token = localStorage.getItem("token");
        
        token = atob(token);
        this.username = token.split(":")[0];

      }else{
        this.loggedIn = false;
      }

      this.userService.getUserByUsername(this.username).subscribe(data=>{
        this.user = data;
    },
     error=>{
      this.errorMsg = 'Could not load User Profile. Try refreshing or contact administrator';
  }
    );
  }

}
