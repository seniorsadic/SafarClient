import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../model/model.produit";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../../../services/produit.service";
@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  produit:Produit=new Produit();
  mode:number=1;
  idProduit:number;
  pageAgence:any;
  pageCategorie:any;
  constructor(public activatedRoute:ActivatedRoute, public produitService:ProduitService, public router:Router) {
    this.idProduit=activatedRoute.snapshot.params['id']
  }

  ngOnInit() {
    this.produitService.getProduit(this.idProduit)
      .subscribe(data=>{
          this.produit=data},
        err=>{console.log(err);
        }
      )

    this.getAgences();
    this.getCategories()
  }
  getAgences() {
    this.produitService.getAgences()
      .subscribe(data => {
        this.pageAgence = data;
        //this.mode=2;

      }, err => {
        console.log(err);
      });
  }

  getCategories() {
    this.produitService.getCategories()
      .subscribe(data => {
        this.pageCategorie = data;
        //this.mode=2;

      }, err => {
        console.log(err);
      });
  }
  updateProduit(){
    this.produitService.updateProduit(this.produit)
      .subscribe(data=>{
        console.log(data);
        alert("mise à jour effectuée");
        this.router.navigate(["produit"])
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }
}
