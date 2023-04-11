import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { drug } from 'src/app/components/drugs/models/drug.model';
import { DrugService } from 'src/app/components/drugs/service/drug.service';
import { UserServiceService } from 'src/app/components/User-Auth/UserService/user-service.service';

@Component({
  selector: 'doctor-view-drug',
  templateUrl: './doctor-inter-home.component.html',
  styleUrls: ['./doctor-inter-home.component.css']
})
export class DoctorInterHomeComponent implements OnInit {
  drugs: drug[] = [];
  errorMsg?: string;



  constructor(private actRoute: ActivatedRoute, private drugService:DrugService,
    private router:Router, private appService:AppServiceService,private userService:UserServiceService) { }

  ngOnInit(): void {
    this.drugService.getAllDrugs().subscribe(data=>{
      this.drugs = data;
    },
    error=>{
        this.errorMsg = 'Could not load Drug Products. Try refreshing or contact administrator';
    });

  }

}
