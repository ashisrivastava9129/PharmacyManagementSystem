import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../model/order.model';
import { OrderServiceService } from '../buy-drug/OrderService/order-service.service';

@Component({
  selector: 'app-view-doctor-order-desc',
  templateUrl: './view-doctor-order-desc.component.html',
  styleUrls: ['./view-doctor-order-desc.component.css']
})
export class ViewDoctorOrderDescComponent implements OnInit {

  id:string;
  order:Order;
  date = new Date();

  constructor(private actRoute: ActivatedRoute,private orderService:OrderServiceService,
    private router:Router) { 
    
  }

  ngOnInit(): void {

    this.actRoute.params.subscribe(params=>{
      this.id=params.id;
       this.orderService.getOrderById(params.id).subscribe(data=>{
            this.order=data;
       });
    });
  }

  deleteOrderMethod(id:string){
    this.orderService.deleteOrder(id).subscribe(data=>{
      
    });
    alert("Order Cancelled...");
    this.router.navigateByUrl("/doctorOrders");
  }

}
