import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../model/admin.model';
import { AdminService } from '../Service/admin-service.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  username:string;
  loggedIn:boolean;
  admin:Admin;
  updateForm: FormGroup; 
  updatedAdmin:Admin;

  constructor(private adminService:AdminService,private router:Router) { }

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

      this.adminService.getAdminByUsername(this.username).subscribe(data=>{
        this.admin = data;
    });
  }

  onUpdateClick(){
    this.updatedAdmin = {
      email: this.updateForm.value.email,
      mobile: this.updateForm.value.mobile,
      city: this.updateForm.value.city,
      district: this.updateForm.value.district,
      state:this.updateForm.value.state,
    };
      
    this.adminService.updateAdmin(this.username,this.updatedAdmin).subscribe(data=>{
      this.admin = data;
      
    });
    alert("Info Updated...");
    this.router.navigateByUrl("view-admin");
  
  }
  get updateFormControl() {
    return this.updateForm.controls;
  }

}
