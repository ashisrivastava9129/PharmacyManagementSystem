import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserServiceService } from '../UserService/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  user:User;

  constructor(private userService:UserServiceService,private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name : new FormControl(''),
      username : new FormControl(''),
      password : new FormControl(''),
      email : new FormControl(''),
      gender : new FormControl(''),
      mobile : new FormControl(''),
      city : new FormControl(''),
      district : new FormControl(''),
      state : new FormControl(''),
      role : new FormControl('')
    });
  }

  onRegisterFormSubmit(){

    this.user = {
      name: this.registerForm.value.name,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      gender: this.registerForm.value.gender,
      mobile: this.registerForm.value.mobile,
      city: this.registerForm.value.city,
      district: this.registerForm.value.district,
      state:this.registerForm.value.state,
      role:this.registerForm.value.role
    }

    this.userService.postUser(this.user).subscribe({
     
    });
    alert("Registration Successfully");
    this.router.navigateByUrl('/login');
    

  }

}
