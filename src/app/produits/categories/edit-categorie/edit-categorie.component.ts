import { Component, OnInit } from '@angular/core';
import {Categorie} from "../../../../model/model.categorie";
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../../../../services/produit.service";
@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {
  categorie:Categorie=new Categorie();
  mode:number=1;
 idCategorie:number;
  constructor(public activatedRoute:ActivatedRoute, public produitService:ProduitService, public router:Router) {
    this.idCategorie=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.produitService.getCategorie(this.idCategorie)
      .subscribe(data=>{
          this.categorie=data},
        err=>{console.log(err);
        }
      )
  }
  updateCategorie(){
    this.produitService.updateCategorie(this.categorie)
      .subscribe(data=>{
        console.log(data);
        alert("mise à jour effectuée");
        this.router.navigate(["categorie"])
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }
}
