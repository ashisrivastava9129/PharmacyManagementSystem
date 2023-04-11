import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserServiceService } from '../UserService/user-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  username:string;
  loggedIn:boolean;
  updateForm: FormGroup;
  user: User;
  updatedUser:User;

  constructor(private router:Router,private userService:UserServiceService) { }

  ngOnInit(): void {
     // updateForm
     this.updateForm = new FormGroup({
      email : new FormControl(null, [Validators.required]),
      mobile : new FormControl(null, [Validators.required]),
      city : new FormControl(null, [Validators.required]),
      district : new FormControl(null, [Validators.required]),
      state : new FormControl(null, [Validators.required])
  });
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
    });
  }

  onUpdateClick(){
    this.updatedUser = {
      email: this.updateForm.value.email,
      mobile: this.updateForm.value.mobile,
      city: this.updateForm.value.city,
      district: this.updateForm.value.district,
      state:this.updateForm.value.state,
    };
      
    this.userService.updateUser(this.username,this.updatedUser).subscribe(data=>{
      this.user = data;
      
    });
    alert("Info Updated...");
    this.router.navigateByUrl("view-user");
  
  }
  get updateFormControl() {
    return this.updateForm.controls;
  }

}
