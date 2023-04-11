import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { suppliers } from '../models/suppliers.model';
import { SuppliersService } from '../service/suppliers.service';

@Component({
  selector: 'app-view-suppliers',
  templateUrl: './view-suppliers.component.html',
  styleUrls: ['./view-suppliers.component.css']
})
export class ViewSuppliersComponent implements OnInit {

  id:number;
  suppliers:suppliers;

  constructor(private actRoute: ActivatedRoute, private suppliersService:SuppliersService ) { 

  }

  ngOnInit(): void {

    this.actRoute.params.subscribe(params=>{
      this.id=params.id;
       this.suppliersService.getSuppliersById(params.id).subscribe(data=>{
            this.suppliers=data;

       });
    });
  }

}
