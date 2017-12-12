import { Component, OnInit } from '@angular/core';
import {Ota} from "../../../model/model.ota";
import {ActivatedRoute, Router} from "@angular/router";
import {OtaService} from "../../../services/ota.service";

@Component({
  selector: 'app-edit-ota',
  templateUrl: './edit-ota.component.html',
  styleUrls: ['./edit-ota.component.css']
})
export class EditOtaComponent implements OnInit {

  ota:Ota=new Ota();
  mode:number=1;
  idOta:number;

  constructor(public activatedRoute:ActivatedRoute, public otaService:OtaService, public router:Router) {
    this.idOta=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.otaService.getOta(this.idOta)
      .subscribe(data=>{
          this.ota=data},
        err=>{console.log(err);
        }
      )
  }
  updateOta(){
    this.otaService.updateOta(this.ota)
      .subscribe(data=>{
        console.log(data);
        alert("mise à jour effectuée");
        this.router.navigate(["ota"])
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }
}
