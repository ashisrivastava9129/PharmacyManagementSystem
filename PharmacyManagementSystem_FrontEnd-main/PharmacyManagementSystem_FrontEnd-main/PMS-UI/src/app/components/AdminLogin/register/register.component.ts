import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { AdminService } from '../Service/admin-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  registerForm: FormGroup;
  admin:Admin;

  constructor(private adminService:AdminService,private router: Router) { }

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
      state : new FormControl('')
    });
  }

  onRegisterFormSubmit(){

    this.admin = {
      name: this.registerForm.value.name,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email,
      gender: this.registerForm.value.gender,
      mobile: this.registerForm.value.mobile,
      city: this.registerForm.value.city,
      district: this.registerForm.value.district,
      state:this.registerForm.value.state,
    }

    this.adminService.postAdmin(this.admin).subscribe({
     
    });
    alert("Registration Successfully");
    this.router.navigateByUrl('../adminlogin');
    

  }

}
