import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { drug } from 'src/app/components/drugs/models/drug.model';
import { DrugService } from 'src/app/components/drugs/service/drug.service';
import { User } from 'src/app/components/User-Auth/model/user.model';
import { UserServiceService } from 'src/app/components/User-Auth/UserService/user-service.service';
import { Order } from '../../model/order.model';
import { OrderServiceService } from './OrderService/order-service.service';

@Component({
  selector: 'app-buy-drug',
  templateUrl: './buy-drug.component.html',
  styleUrls: ['./buy-drug.component.css']
})
export class BuyDrugComponent implements OnInit {

  orderAddForm: FormGroup;
  order:Order;
  id:string;
  drug:drug;
  username:string;
  userLoggedIn:User;

  constructor(private orderService:OrderServiceService, private router: Router,
    private actRoute: ActivatedRoute,private drugService:DrugService,private appService:AppServiceService,
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
    });

    //from drug id Retrieve Drug
    this.actRoute.params.subscribe(params=>{
      this.id=params.id;
       this.drugService.getDrugById(params.id).subscribe(data=>{
            this.drug=data;
       });
    });

    this.orderAddForm = new FormGroup({
      name : new FormControl(''),
      quantity : new FormControl(null),
      address : new FormControl(''),
      city : new FormControl(''),
      mobileno : new FormControl(''),
      pincode : new FormControl(''),
      
    });
  }

  onOrderAddFormSubmit(){

    this.order ={
      name: this.orderAddForm.value.name,
      quantity: this.orderAddForm.value.quantity,
      address: this.orderAddForm.value.address,
      city: this.orderAddForm.value.city,
      mobileno: this.orderAddForm.value.mobileno,
      pinCode: this.orderAddForm.value.pincode,
      userId: this.userLoggedIn.id
      
    }

    this.orderService.postOrder(this.order,this.id).subscribe({
     
    });
    alert("Order Added Successfully");
    this.router.navigateByUrl('/');
  }


}
