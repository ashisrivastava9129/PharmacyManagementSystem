import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { drug } from '../models/drug.model';
import { DrugService } from '../service/drug.service';

@Component({
  selector: 'app-edit-drug',
  templateUrl: './edit-drug.component.html',
  styleUrls: ['./edit-drug.component.css']
})
export class EditDrugComponent implements OnInit {

  drugAddForm:FormGroup;
  id:string;
  drug:drug;
  updatedDrug:drug;

  constructor(private actRoute: ActivatedRoute, private drugService:DrugService,private router: Router) { }

  ngOnInit(): void {

    this.drugAddForm = new FormGroup({
      name : new FormControl(null,[Validators.required]),
      company : new FormControl(null,[Validators.required]),
      description : new FormControl(null,[Validators.required]),
      price : new FormControl(null,[Validators.required]),
      stock : new FormControl(null,[Validators.required]),
      mfgDate : new FormControl(null,[Validators.required]),
      expireDate : new FormControl(null,[Validators.required])
      
  });

    this.actRoute.params.subscribe(params=>{
      this.id=params.id;
       this.drugService.getDrugById(params.id).subscribe(data=>{
            this.drug=data;

       });
    });
  }

  onDrugUpdateFormSubmit(){

    this.updatedDrug = {
      name: this.drugAddForm.value.name,
      company: this.drugAddForm.value.company,
      description: this.drugAddForm.value.description,
      cost: this.drugAddForm.value.price,
      quantity: this.drugAddForm.value.stock,
      mfgDate: this.drugAddForm.value.mfgDate,
      expireDate: this.drugAddForm.value.expireDate
    }

    this.drugService.updateDrug(this.id,this.updatedDrug).subscribe(data=>{
      
      
    });
    alert("Drug Info Updated...");
    this.router.navigateByUrl("/drugHome");
  }
  
  get updateFormControl() {
    return this.drugAddForm.controls;
  }
}
