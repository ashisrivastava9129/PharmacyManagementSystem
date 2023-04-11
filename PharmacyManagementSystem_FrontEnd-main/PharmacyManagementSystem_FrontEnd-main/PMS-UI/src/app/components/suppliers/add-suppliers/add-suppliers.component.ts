import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { suppliers } from '../models/suppliers.model';
import { SuppliersService } from '../service/suppliers.service';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.css']
})
export class AddSuppliersComponent implements OnInit {
  suppliersAddForm: FormGroup;
  suppliers:suppliers;

  constructor(private suppliersService:SuppliersService, private router: Router) { }

  ngOnInit(): void {
    this.suppliersAddForm = new FormGroup({
      suppliersName : new FormControl(''),
      description : new FormControl(''),
      suppliersEmail : new FormControl('')
      
  });
  }

  onSuppliersAddFormSubmit(){

    this.suppliers ={
      suppliersName: this.suppliersAddForm.value.suppliersName,
      description: this.suppliersAddForm.value.description,
      suppliersEmail: this.suppliersAddForm.value.suppliersEmail
    }

    this.suppliersService.postSuppliers(this.suppliers).subscribe({
     
    });
    alert("Suppliers Added Successfully");
    this.router.navigateByUrl('/suppliersHome');
  }

}
