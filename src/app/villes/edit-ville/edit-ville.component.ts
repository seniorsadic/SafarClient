import { Component, OnInit } from '@angular/core';
import {Ville} from "../../../model/model.ville";
import {ActivatedRoute, Router} from "@angular/router";
import {VilleService} from "../../../services/ville.service";

@Component({
  selector: 'app-edit-ville',
  templateUrl: './edit-ville.component.html',
  styleUrls: ['./edit-ville.component.css']
})
export class EditVilleComponent implements OnInit {
  ville:Ville=new Ville();
  mode:number=1;
  idVille:number;
  constructor(public activatedRoute:ActivatedRoute, public villeService:VilleService, public router:Router) {
    this.idVille=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.villeService.getVille(this.idVille)
      .subscribe(data=>{
          this.ville=data},
        err=>{console.log(err);
        }
      )
  }

  updateVille(){
    this.villeService.updateVille(this.ville)
      .subscribe(data=>{
        console.log(data);
        alert("mise à jour effectuée");
        this.router.navigate(["ville"])
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }
}
