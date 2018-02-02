import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {ProduitService} from "../../../services/produit.service";
import {Categorie} from "../../../model/model.categorie";
import {LoginService} from "../../../services/login.service";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  pageCategorie:any;
  pages:any;
  settings:any = {
    mode: 'external',
    columns: {
      idcategorie: {
        title: 'Identifiant',
        editable: true
      },
      designation: {
        title: 'Designation'
      }
    },
    add: {
      addButtonContent: '<i class="fa fa-plus-circle" aria-hidden="true">Ajouter</i>',
      createButtonContent: '<i class="fa fa-check-square">Créer</i>',
      cancelButtonContent: '<i class="fa fa-minus-square">Annuler</i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="glyphicon glyphicon-pencil"></i>',
      saveButtonContent: '<i class="fa fa-check-square">Modifier</i>',
      cancelButtonContent: '<i class="fa fa-minus-square">Annuler</i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      confirmDelete: true
    },
    pager: {
      display: true,
      perPage: 3
    },
  };

  constructor(public http: Http, public produitService: ProduitService, public router:Router, public loginService:LoginService) { }

  ngOnInit() {
    if (this.loginService.getConnect()!='true'){
      this.router.navigate(['/about']);
    }
    this.doSearch();
  }
  ajoutCate(event) {
    this.router.navigate(['/new-categorie']);
  }

  modifCate(event) {
    this.router.navigate(['/edit-categorie',event.data.idcategorie]);
  }

  deleteCate(event) {
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.produitService.deleteCategorie(event.data['idcategorie'])
        .subscribe(data => {
          event.confirm.resolve();
        }, err => {
          console.log(err);
        })
    }
  }

  doSearch() {  this.produitService.getCategories()
    .subscribe( data => {
      this.pageCategorie = data;
      console.log( this.pageCategorie );
      this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }

   onEditCategorie(id:number){
    this.router.navigate(['/edit-categorie',id]);
  }

  onDeleteCatergoie(c:Categorie) {
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.produitService.deleteCategorie(c.idcategorie)
        .subscribe(data => {
          this.pageCategorie.content.splice(
            this.pageCategorie.content.indexOf(c), 1
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
