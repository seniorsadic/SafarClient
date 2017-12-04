import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../model/model.produit";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

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

  productWasSelected(product: Produit): void {
    console.log('Product clicked: ', product);
  }

}
