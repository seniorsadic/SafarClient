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
import {DetailVente} from "../../model/model.detailvente";

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
  vente:any;


  constructor(public http: Http, public produitservice: ProduitService, public router:Router, public contactService:ContactsService
    , public venteService:VenteService) {
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
getcontact() {

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

  desole(){
    this.router.navigate(['/reporting']);
  }

  creerVente(){

     var  operation:Operation=new Operation();

     operation.service="Vente";
     operation.reference="VENTE002";
     operation.statut="Payé";
     operation.montant=this.total;
     operation.iduser=1;
     operation.date='2017-12-8';

     this.venteService.saveVente(operation)
      .subscribe( data => {
        this.vente=data;
        this.afficher();
      }, err => {
        console.log( err );
      } );

  }

  afficher(){
    console.log( 'Nbre ', this.test.length );
    var  detailVente:DetailVente=new DetailVente();
    for(var i =0; i < this.test.length; i++){
       detailVente.quantite=1;
       detailVente.remise=0;
       detailVente.prixunitaire=this.test[i].prix;
       detailVente.idproduit=this.test[i].idproduit;
       detailVente.idvente=this.vente.idvente;
      console.log( 'Nbre ', i );
      this.venteService.saveVenteProduit(detailVente)
        .subscribe( data => {
          console.log( data );
        }, err => {
          console.log( err );
        } );
    }
    console.log( 'Terminer ' );
  }

}
