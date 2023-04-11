import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { suppliers } from '../models/suppliers.model';
import { SuppliersService } from '../service/suppliers.service';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.css']
})
export class EditSuppliersComponent implements OnInit {
  suppliersAddForm:FormGroup;
  id:string;
  suppliers:suppliers;
  updatedSuppliers:suppliers;

  constructor(private actRoute: ActivatedRoute, private suppliersService:SuppliersService,private router: Router) { }

  ngOnInit(): void {

    this.suppliersAddForm = new FormGroup({
      suppliersName : new FormControl(null,[Validators.required]),
      description : new FormControl(null,[Validators.required]),
      suppliersEmail : new FormControl(null,[Validators.required]),
      
  });

    this.actRoute.params.subscribe(params=>{
      this.id=params.id;
       this.suppliersService.getSuppliersById(params.id).subscribe(data=>{
            this.suppliers=data;

       });
    });
  }

  onSuppliersUpdateFormSubmit(){

    this.updatedSuppliers = {
      suppliersName: this.suppliersAddForm.value.suppliersName,
      description: this.suppliersAddForm.value.description,
      suppliersEmail: this.suppliersAddForm.value.suppliersEmail, 
    }

    this.suppliersService.updateSuppliers(this.id,this.updatedSuppliers).subscribe(data=>{
      
      
    });
    alert("Suppliers Info Updated...");
    this.router.navigateByUrl("/suppliersHome");
  }
  
  get updateFormControl() {
    return this.suppliersAddForm.controls;
  }
}

