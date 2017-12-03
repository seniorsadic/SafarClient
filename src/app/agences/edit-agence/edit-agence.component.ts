import { Component, OnInit } from '@angular/core';
import {Agence} from "../../../model/model.agence";
import {AgenceService} from "../../../services/agence.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-agence',
  templateUrl: './edit-agence.component.html',
  styleUrls: ['./edit-agence.component.css']
})
export class EditAgenceComponent implements OnInit {
  agence:Agence=new Agence();
  mode:number=1;
  idAgence:number;
  pageVille:any;
  constructor(public activatedRoute:ActivatedRoute, public agenceService:AgenceService, public router:Router) {
    this.idAgence=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    this.agenceService.getAgence(this.idAgence)
      .subscribe(data=>{
          this.agence=data},
        err=>{console.log(err);
        }
      )
    this.getVilles();
  }
  getVilles() {
    this.agenceService.getVilles()
      .subscribe(data => {
        this.pageVille = data;
        //this.mode=2;

      }, err => {
        console.log(err);
      });
  }
  updateAgence(){
    this.agenceService.updateAgence(this.agence)
      .subscribe(data=>{
        console.log(data);
        alert("mise à jour effectuée");
        this.router.navigate(["agence"])
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }

}
