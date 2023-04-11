import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { Admin } from './model/admin.model';
import { AdminService } from './Service/admin-service.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  allAdmin: Admin[];
  errorMsg: string;
  invalidLogin = false;

  constructor(private appService:AppServiceService, private adminService:AdminService,
    private router: Router) { }

  ngOnInit(): void {
    // this.adminService.getAllAdmin().subscribe(data=>{
    //   this.allAdmin = data;
    // });

    // login form 
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onLoginFormSubmit(){
     let username = this.loginForm.value.username;
     let password = this.loginForm.value.password;

     //extracting user from users using username and password
     //let admin = this.allAdmin.find(a=> (a.username === username && a.password === password));

    // if(admin){  //if admin present
      
    //   // set localStorage isLoggedIn item to true
    //   localStorage.setItem("isLoggedIn","true");

    //   let token = btoa(username + ":" + password);
    //   localStorage.setItem("token",token);
    //   this.appService.adminLoggedIn.next(true);
    //   alert("LoggedIn Successfully.");
    //   this.router.navigateByUrl('/');

    this.adminService.authenticate(username,password).subscribe(data=>{
      this.router.navigate([''])
      this.invalidLogin = false
     },
     error => {
      this.invalidLogin = true

        }
     )
    // }
    // else{
    //    this.errorMsg = 'Invalid Credentials';
    // }

    if(this.invalidLogin){
      this.errorMsg = 'Invalid Credentials';
    }

  }

}
