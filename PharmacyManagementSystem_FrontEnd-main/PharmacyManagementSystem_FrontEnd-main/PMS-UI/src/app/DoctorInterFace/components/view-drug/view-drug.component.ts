import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { drug } from 'src/app/components/drugs/models/drug.model';
import { DrugService } from 'src/app/components/drugs/service/drug.service';


@Component({
  selector: 'app-view-drug',
  templateUrl: './view-drug.component.html',
  styleUrls: ['./view-drug.component.css']
})
export class ViewDoctorDrugComponent implements OnInit {

  id:number;
  drug:drug;

  constructor(private actRoute: ActivatedRoute, private drugService:DrugService ) { 

  }

  ngOnInit(): void {

    this.actRoute.params.subscribe(params=>{
      this.id=params.id;
       this.drugService.getDrugById(params.id).subscribe(data=>{
            this.drug=data;

       });
    });
  }

}
