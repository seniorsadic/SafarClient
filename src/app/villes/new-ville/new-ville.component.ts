import { Component, OnInit } from '@angular/core';
import {Ville} from "../../../model/model.ville";
import {VilleService} from "../../../services/ville.service";

@Component({
  selector: 'app-new-ville',
  templateUrl: './new-ville.component.html',
  styleUrls: ['./new-ville.component.css']
})
export class NewVilleComponent implements OnInit {
  mode:number=1;
  ville: Ville=new Ville();

  constructor(public villeService:VilleService) { }

  ngOnInit() {
  }
  saveVille(){
    this.villeService.saveVille(this.ville)
      .subscribe( data => {
        this.ville=data;
        this.mode=2;

      }, err => {
        console.log( err );
      } );
  }





}
