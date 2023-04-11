import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin.model';
import { AdminService } from '../Service/admin-service.service';

@Component({
  selector: 'app-view-admin',
  templateUrl: './view-admin.component.html',
  styleUrls: ['./view-admin.component.css']
})
export class ViewAdminComponent implements OnInit {

  username:string;
  loggedIn:boolean;
  admin:Admin;

  constructor(private adminService:AdminService) { }

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

      this.adminService.getAdminByUsername(this.username).subscribe(data=>{
        this.admin = data;
    });
  }

}
