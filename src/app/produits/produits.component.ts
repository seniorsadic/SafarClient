import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../model/model.produit";
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  pageProduit: any;
  pages:any;
  constructor(public http: Http, public produitservice: ProduitService, public router:Router) { }

  ngOnInit() {
    this.doSearch();
  }
  doSearch() {  this.produitservice.getProduits()
    .subscribe( data => {
      this.pageProduit = data;
      console.log( this.pageProduit );
      this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }


  onEditProduit(id:number){
    this.router.navigate(['/edit-produit',id]);

  }

  onDeleteProduit(p:Produit) {
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.produitservice.deleteProduit(p.idproduit)
        .subscribe(data => {
          this.pageProduit.content.splice(
            this.pageProduit.content.indexOf(p), 1
          );


        }, err => {
          console.log(err);
        })
    }
  }
  gotoPages(i){
    this.pages=i;
    this.doSearch();
  }
}
