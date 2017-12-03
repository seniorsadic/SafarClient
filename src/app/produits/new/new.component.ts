import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../model/model.produit";
import {ProduitService} from "../../../services/produit.service";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  mode:number=1;
  produit: Produit=new Produit();
  pageAgence:any;
  pageCategorie:any;
  constructor(public produitService:ProduitService) { }

  ngOnInit() {
    this.getAgences();
    this.getCategorie();
  }
  saveProduit(){
    this.produitService.saveProduit(this.produit)
      .subscribe( data => {
        this.produit=data;
        this.mode=2;

      }, err => {
        console.log( err );
      } );
  }

  getAgences(){
    this.produitService.getAgences()
      .subscribe( data => {
        this.pageAgence=data;
        //this.mode=2;

      }, err => {
        console.log( err );
      } );


  }

  getCategorie(){
    this.produitService.getCategories()
      .subscribe( data => {
        this.pageCategorie=data;
        //this.mode=2;

      }, err => {
        console.log( err );
      } );


  }
}
