import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../model/model.produit";
import {ProduitService} from "../../../services/produit.service";


import {Router} from "@angular/router";
import {LoginService} from "../../../services/login.service";
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
  constructor(public produitService:ProduitService,public router:Router, public loginService:LoginService) { }

  ngOnInit() {
    if (this.loginService.getConnect()!='true'){
      this.router.navigate(['/about']);
    }
    this.getAgences();
    this.getCategorie();
  }
  saveProduit(){
    this.produitService.saveProduit(this.produit)
      .subscribe( data => {
        this.produit=data;
        this.mode=2;
        this.router.navigate(['/produit']);
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

  display: boolean = false;

  showDialog() {
    this.display = true;
  }
}


