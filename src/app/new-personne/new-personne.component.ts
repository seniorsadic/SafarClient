import { Component, OnInit } from '@angular/core';
import {Personne} from "../../model/model.personne";
import {ContactsService} from "../../services/contacts.service";
import {Agence} from "../../model/model.agence";

@Component({
  selector: 'app-new-personne',
  templateUrl: './new-personne.component.html',
  styleUrls: ['./new-personne.component.css']
})
export class NewPersonneComponent implements OnInit {
mode:number=1;
  personne: Personne=new Personne();
  pageAgence:any;
  agence:any;
  constructor( public personneService:ContactsService) { }

  ngOnInit() {
    this.getAgences();
  }

  savePersonne(){
    this.personneService.savePersonnel(this.personne)
      .subscribe( data => {
        this.personne=data;
      this.mode=2;

      }, err => {
        console.log( err );
      } );
  }

  getAgences(){
    this.personneService.getAgences()
      .subscribe( data => {
        this.pageAgence=data;
        //this.mode=2;

      }, err => {
        console.log( err );
      } );


          }
}
