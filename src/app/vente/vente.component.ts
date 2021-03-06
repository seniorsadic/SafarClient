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
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.css']
})
export class VenteComponent implements OnInit {

  total:number;
  category:any;
  pageProduit: any;
  pages:any;
  test:Produit[];
  test1:any;
  value:any;
  vente:any;


  constructor(public http: Http, public produitservice: ProduitService, public router:Router, public contactService:ContactsService
    , public venteService:VenteService, public loginService:LoginService) {
    this.test=[];
    this.test1=[];
    this.total=0;
  }

  ngOnInit() {
    if (this.loginService.getConnect()!='true'){
      this.router.navigate(['/about']);
    }
 //   this.doSearch();
    this.catego();
  }

  chargerProduit(id:number){
    this.produitservice.getProduitByCategorie(id)
      .subscribe( data => {
        this.pageProduit = data;
      }, err => {
        console.log( err );
      } );
  }

  catego() { this.produitservice.getCategories()
    .subscribe( data => {
      this.category = data;
      console.log( this.category );
    }, err => {
      console.log( err );
    } );
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
    this.test1.push({'idProduit':product.idproduit,'quantite':1});
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

  ajouter(id:number,quantite:number ){
    var idligne=this.rechercherid(id);
    if( idligne == -1){
      this.test1.push({'idProduit':id,'quantite':quantite});
    }else
      this.test1[idligne].quantite=quantite;
    this.calculer();
    console.log(this.test1);
  }

  calculer(){
    this.total=0;
    for(var i =0; i < this.test1.length; i++){
      var numero=this.rechercheridProduit(this.test1[i].idProduit);
      this.total+=this.test1[i].quantite*Number(this.test[numero].prix);
    }
  }

  rechercherid(id:number):number{
    for(var i =0; i < this.test1.length; i++){
      if (this.test1[i].idProduit==id)
        return i;
    }
    return -1;
  }

  rechercheridProduit(id:number):number{
    for(var i =0; i < this.test.length; i++){
      if (this.test[i].idproduit==id)
        return i;
    }
    return -1;
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
    var  detailVente:DetailVente=new DetailVente();
    for(var i =0; i < this.test.length; i++){
       var numero=this.rechercherid(this.test[i].idproduit);
       console.log( 'Nbre ',this.test[i].idproduit );
       detailVente.quantite=this.test1[numero].quantite;
       detailVente.remise=0;
       detailVente.prixunitaire=this.test[i].prix;
       detailVente.idproduit=this.test[i].idproduit;
       detailVente.idvente=this.vente.idvente;

       if (i==this.test.length){
         this.router.navigate(['/reporting']);
       }


      this.venteService.saveVenteProduit(detailVente)
        .subscribe( data => {
          console.log( data );
        }, err => {
          console.log( err );
        } );
    }
    console.log( 'Terminer ' );

    localStorage.setItem('1','');

  }

}
