import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {VilleService} from "../../services/ville.service";
import {Ville} from "../../model/model.ville";

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})
export class VillesComponent implements OnInit {

  pageVille: any;
  pages:any;
  settings:any;



  constructor(public http: Http, public villeservice: VilleService, public router:Router) { }

  ngOnInit() {
    this.doSearch();
    this.settings={
      mode: 'inline',
      columns: {
        idville: {
          title: 'Identifiant'
        },
        designation: {
          title: 'Désignation'
        },

      },
      add: {
        addButtonContent: '<i class="fa fa-plus-circle" aria-hidden="true">Ajouter</i>',
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

  doSearch() {  this.villeservice.getVilles()
    .subscribe( data => {
      this.pageVille = data;
      console.log( this.pageVille );
      //this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }

  ajoutVille(event){
    this.villeservice.saveVille(event.newData)
      .subscribe( data => {
        event.confirm.resolve();
        this.doSearch();

      }, err => {
        console.log( err );
      } );
  }

  modifVille(event){
    this.villeservice.updateVille(event.newData)
      .subscribe(data=>{
        console.log(data);
        this.doSearch()
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }

  deleteVille(event){
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.villeservice.deleteVille(event.data.idville)
        .subscribe(data => {
          event.confirm.resolve();
        }, err => {
          console.log(err);
        })
    }
  }

  onEditVille(id:number){
    this.router.navigate(['/edit-ville',id]);

  }

  onDeleteVille(v:Ville) {
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.villeservice.deleteVille(v.idville)
        .subscribe(data => {
          this.pageVille.content.splice(
            this.pageVille.content.indexOf(v), 1
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
