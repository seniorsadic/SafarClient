import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {ContactsService} from '../../services/contacts.service';
import {Router} from "@angular/router";
import {Personne} from "../../model/model.personne";


@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
pagePerosonne: any;
motCle: String= '';
page: Number= 0 ;
size: Number= 5 ;
pages: any;
  settings:any ;
  constructor( public http: Http, public contactservice: ContactsService, public router:Router) { }

  ngOnInit() {

    this.doSearch();
    this.settings={
      mode: 'external',
      columns: {
        iduser: {
          title: 'Identifiant',
          width:  '70px'
        },
        numero: {
          title: 'Numéro'
        },
        prenoms: {
          title: 'Prénom'
        },
        nom: {
          title: 'Nom'
        },
        idagence: {
          title: 'Agence',
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
  /*doSearch() {  this.contactservice.getContacts(this.motCle, this.page, this.size)
    .subscribe( data => {
      this.pagePerosonne = data;
      this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }*/


  doSearch() {  this.contactservice.getPersonnels()
    .subscribe( data => {
      this.pagePerosonne = data;
      console.log( this.pagePerosonne );
      //this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }

    chercher() {
    this.doSearch();
    }
  ajout(event){
    this.router.navigate(['/new-personne']);
  }

  edit(event){
    console.log(event.data);
    this.router.navigate(['/edit-personne',event.data.iduser]);
  }
  delete(event){
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.contactservice.deletePersonnel(event.data.iduser)
        .subscribe(data => {
          this.doSearch();
        }, err => {
          console.log(err);
        })
    }
  }

    gotoPages(i){
    this.page=i;
    this.doSearch();
    }

  onEditPersonne(id:number){
      this.router.navigate(['/edit-personne',id]);

  }

  onDeletePersonnel(p:Personne){
    let confirm=window.confirm("est vous sure?");
    if(confirm==true){
      this.contactservice.deletePersonnel(p.iduser)
        .subscribe(data=>{
          this.pagePerosonne.content.splice(
            this.pagePerosonne.content.indexOf(p),1
          );


        },err=>{
          console.log(err);
        })
    }

  }
}
