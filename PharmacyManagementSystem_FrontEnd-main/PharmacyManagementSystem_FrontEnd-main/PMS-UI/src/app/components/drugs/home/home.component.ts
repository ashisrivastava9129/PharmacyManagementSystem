import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { User } from '../../User-Auth/model/user.model';
import { UserServiceService } from '../../User-Auth/UserService/user-service.service';
import { drug } from '../models/drug.model';
import { DrugService } from '../service/drug.service';

@Component({
  selector: 'drug-admin-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class DrugHomeComponent implements OnInit {

  drugs: drug[] = [];
  errorMsg?: string = '';
  loggedIn: boolean;
 

  

  constructor(private actRoute: ActivatedRoute, private drugService:DrugService,
    private router:Router, private appService:AppServiceService,private userService:UserServiceService) {
     }

  ngOnInit(): void {

    this.drugService.getAllDrugs().subscribe(data=>{
      this.drugs = data;
    },
    error=>{
        this.errorMsg = 'Could not load Drug Products. Try refreshing or contact administrator';
    });


    

  }

  deleteDrugMethod(id:string){
    this.drugService.deleteDrug(id).subscribe(data=>{
      this.drugService.getAllDrugs().subscribe(data=>{
        this.drugs = data;
      })
    });
    alert("Drug Deleted...");
    this.router.navigateByUrl("/");
  }


}
