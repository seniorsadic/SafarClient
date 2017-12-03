import { Component, OnInit } from '@angular/core';
import {Agence} from "../../../model/model.agence";
import {AgenceService} from "../../../services/agence.service";


@Component({
  selector: 'app-new-agence',
  templateUrl: './new-agence.component.html',
  styleUrls: ['./new-agence.component.css']
})
export class NewAgenceComponent implements OnInit {
  mode:number=1;
  agence: Agence=new Agence();
  pageVille:any;

  constructor(public agenceService:AgenceService) { }

  ngOnInit() {
    this.getVilles();
  }

  saveAgence(){
    this.agenceService.saveAgence(this.agence)
      .subscribe( data => {
        this.agence=data;
        this.mode=2;

      }, err => {
        console.log( err );
      } );
  }

  getVilles(){
    this.agenceService.getVilles()
      .subscribe( data => {
        this.pageVille=data;
        //this.mode=2;

      }, err => {
        console.log( err );
      } );


  }

}
