import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { User } from '../model/user.model';
import { UserServiceService } from '../UserService/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class AuthHomeComponent implements OnInit {

  loginForm: FormGroup;
  users:User[];
  errorMsg: string;
  userLoggedIn: User;

  constructor(private router: Router, private appService: AppServiceService,
    private userService:UserServiceService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data=>{
      this.users = data;
    })
    
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onLoginFormSubmit(){
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;

    //extracting user from users using username and password
    let user = this.users.find(u=> (u.username === username && u.password === password));

    if(user){  //if user present

      localStorage.setItem("isLoggedIn","true");

      let token = btoa(username + ":" + password);
      localStorage.setItem("token",token);
      this.appService.LoggedIn.next(true);


      this.userService.getUserByUsername(username).subscribe(data=>{
        this.userLoggedIn = data;
        
        if(this.userLoggedIn.role.toLowerCase() === "admin"){
            this.router.navigateByUrl("/")
        }else{
           this.router.navigateByUrl("/");
        }
    });
    

      this.router.navigateByUrl('/');
      
    
    }else{
      this.errorMsg = 'Invalid Credentials';
    }
  }


}


