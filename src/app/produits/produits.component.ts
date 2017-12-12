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
  settings:any;
  constructor(public http: Http, public produitservice: ProduitService, public router:Router) { }

  ngOnInit() {

      this.doSearch();
      this.settings={
        mode: 'external',
        columns: {
          idproduit: {
            title: 'Identifiant',
            width:  '70px'
          },
          designation: {
            title: 'Désignation'
          },
          quantite: {
            title: 'Quantité'
          },
          prix: {
            title: 'Prix'
          },
          idagence: {
            title: 'Agence',
            type: 'html',
            valuePrepareFunction: (value) => {
              return value.designation;
            },

          },
          idcategorie: {
            title: 'Categorie',
            type: 'html',
            valuePrepareFunction: (value) => {
              return value.designation;
            },

          }
        },
        add: {
          addButtonContent: '<i class="glyphicon glyphicon-plus" aria-hidden="true">Ajouter</i>',
          createButtonContent: '<i class="fa fa-check-square"> Créer</i>',
          cancelButtonContent: '<i class="fa fa-minus-square"> Annuler</i>',
          confirmCreate: true
        },
        edit: {
          editButtonContent: '<i class="glyphicon glyphicon-pencil"> </i>',
          saveButtonContent: '<i class="fa fa-check-square"> Modifier</i>',
          cancelButtonContent: '<i class="fa fa-minus-square"> Annuler</i>',
          confirmSave: true
        },
        delete: {
          deleteButtonContent: '<i class="glyphicon glyphicon-trash"></i>',
          confirmDelete: true
        },
        pager: {
          display: true,
          perPage: 3
        },
      };
  }
  doSearch() {  this.produitservice.getProduits()
    .subscribe( data => {
      this.pageProduit = data;
      console.log( this.pageProduit );
      this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }

  ajout(event){

    this.router.navigate(['/new-produit']);
  }

  edit(event){
    console.log(event.data);
    this.router.navigate(['/edit-produit',event.data.idproduit]);
  }
  delete(event){
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.produitservice.deleteProduit(event.data.idproduit)
        .subscribe(data => {
          this.doSearch();
        }, err => {
          console.log(err);
        })
    }
  }

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
