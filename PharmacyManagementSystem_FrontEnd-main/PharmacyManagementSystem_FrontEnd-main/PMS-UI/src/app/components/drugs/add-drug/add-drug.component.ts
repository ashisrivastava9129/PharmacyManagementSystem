import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { drug } from '../models/drug.model';
import { DrugService } from '../service/drug.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {

  drugAddForm: FormGroup;
  drug:drug;

  constructor(private drugService:DrugService, private router: Router) { }

  ngOnInit(): void {
    this.drugAddForm = new FormGroup({
      name : new FormControl(''),
      company : new FormControl(''),
      description : new FormControl(''),
      price : new FormControl(null),
      stock : new FormControl(null),
      mfgDate : new FormControl(''),
      expireDate : new FormControl(''),
      
  });
  }

  onDrugAddFormSubmit(){

    this.drug ={
      name: this.drugAddForm.value.name,
      company: this.drugAddForm.value.company,
      description: this.drugAddForm.value.description,
      cost: this.drugAddForm.value.price,
      quantity: this.drugAddForm.value.stock,
      mfgDate: this.drugAddForm.value.mfgDate,
      expireDate: this.drugAddForm.value.expireDate
    }

    this.drugService.postDrug(this.drug).subscribe({
     
    });
    alert("Drug Added Successfully");
    this.router.navigateByUrl('/');
  }

}
