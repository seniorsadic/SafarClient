import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../../services/produit.service";
import {Categorie} from "../../../../model/model.categorie";
import {Router} from "@angular/router";
import {LoginService} from "../../../../services/login.service";

@Component({
  selector: 'app-new-categorie',
  templateUrl: './new-categorie.component.html',
  styleUrls: ['./new-categorie.component.css']
})
export class NewCategorieComponent implements OnInit {
  mode:number=1;
  categorie: Categorie=new Categorie();

  constructor(public produitService:ProduitService, public router:Router, public loginService:LoginService) { }

  ngOnInit() {
    if (this.loginService.getConnect()!='true'){
      this.router.navigate(['/about']);
    }
  }

  saveCategorie(){
    this.produitService.saveCategorie(this.categorie)
      .subscribe( data => {
        this.categorie=data;
        this.mode=2;

      }, err => {
        console.log( err );
      } );
  }




}
