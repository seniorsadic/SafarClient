import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {ProduitService} from "../../../services/produit.service";
import {Categorie} from "../../../model/model.categorie";
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  pageCategorie:any;
  pages:any;
  constructor(public http: Http, public produitService: ProduitService, public router:Router) { }

  ngOnInit() {
    this.doSearch();
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
