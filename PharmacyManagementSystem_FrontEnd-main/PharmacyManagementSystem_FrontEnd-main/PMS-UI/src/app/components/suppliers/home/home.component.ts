import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { suppliers } from '../models/suppliers.model';
import { SuppliersService } from '../service/suppliers.service';

@Component({
  selector: 'suppliers-Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class SuppliersHomeComponent implements OnInit {

  suppliers: suppliers[] = [];
  errorMsg?: string = '';

  constructor(private actRoute: ActivatedRoute, private suppliersService:SuppliersService,private router:Router) { }

  ngOnInit(): void {

    this.suppliersService.getAllSuppliers().subscribe(data=>{
      this.suppliers = data;
    },
    error=>{
        this.errorMsg = 'Could not load Suppliers. Try refreshing or contact administrator';
    });
  }

  deleteSuppliersMethod(id:string){
    this.suppliersService.deleteSuppliers(id).subscribe(data=>{
      this.suppliersService.getAllSuppliers().subscribe(data=>{
        this.suppliers = data;
      })
    });
    alert("Suppliers Deleted...");
    this.router.navigateByUrl("/");
  }

}
