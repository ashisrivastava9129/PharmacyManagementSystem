import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { User } from 'src/app/components/User-Auth/model/user.model';
import { UserServiceService } from 'src/app/components/User-Auth/UserService/user-service.service';
import { Order } from '../../model/order.model';
import { OrderServiceService } from '../buy-drug/OrderService/order-service.service';

@Component({
  selector: 'app-view-doctor-orders',
  templateUrl: './view-doctor-orders.component.html',
  styleUrls: ['./view-doctor-orders.component.css']
})
export class ViewDoctorOrders implements OnInit {

  allorder:Order[];
  username:string;
  userLoggedIn:User;

  constructor(private orderService:OrderServiceService,private appService:AppServiceService,
    private userService:UserServiceService) { }

  ngOnInit(): void {

    //get currently loggedIn user
    this.appService.LoggedIn.subscribe(data=>{
      let status = localStorage.getItem("isLoggedIn");
      if(status){
        let token = localStorage.getItem("token");
        
        token = atob(token);
        this.username = token.split(":")[0];

      }
    });
      this.userService.getUserByUsername(this.username).subscribe(data=>{
        this.userLoggedIn = data;

        this.orderService.getOrdersByUserId(this.userLoggedIn?.id).subscribe(data=>{
          this.allorder = data;
      });
    });


    

    
        
    
  }

}
