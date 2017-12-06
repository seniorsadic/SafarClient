import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../model/model.produit";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Vente} from "../../model/model.vente";
import {Operation} from "../../model/model.operation";
import {Personne} from "../../model/model.personne";
import {ContactsService} from "../../services/contacts.service";
import {VenteService} from "../../services/vente.service";

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  total:number;
  pageProduit: any;
  pages:any;
  test:Produit[];
  test1:any;
  value:number;


  constructor(public http: Http, public produitservice: ProduitService, public router:Router, public contactService:ContactsService, public venteService:VenteService) {
    this.test=[];
    this.test1=[];
    this.total=0;
  }

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
    this.test.push(product);
    this.total+=Number(product.prix);
    console.log('Quantite: ', this.total);
  }

  convertir(valeur:string):any{
    return [Number(valeur)];
  }

  createRange(a:number){
    var k:number[]=[];
    for(var i = 1; i <= a; i++){
      k.push(i);
    }
    return k;
  }

  ajouter(id:number){
    this.test1.push({id});
    console.log(this.value);
    console.log(this.test1);
  }

  creerVente(){
    var  operation:Operation=new Operation();
    var personne:Personne;
    this.contactService.getContact(1)
      .subscribe( data => {
        personne = data;
      }, err => {
        console.log( err );
      } );

     operation.service="Vente";
     operation.reference="VENTE002";
     operation.statut="Payé";
     operation.montant=this.total;
     operation.idUser=personne;
     operation.date='2017-12-8';

     this.venteService.saveVente(operation)
      .subscribe( data => {
        operation=data;

      }, err => {
        console.log( err );
      } );


  }

}
