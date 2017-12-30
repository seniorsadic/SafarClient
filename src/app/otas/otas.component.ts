import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {OtaService} from "../../services/ota.service";
import {Ota} from "../../model/model.ota";
@Component({
  selector: 'app-otas',
  templateUrl: './otas.component.html',
  styleUrls: ['./otas.component.css']
})
export class OtasComponent implements OnInit {
  pageOta: any;
  pages:any;
  settings:any;
  constructor(public http: Http, public otaservice: OtaService, public router:Router) { }

  ngOnInit() {
    this.doSearch();
    this.settings={
      mode: 'inline',
      columns: {
        idoperateur: {
          title: 'Identifiant',
          width:  '70px'
        },
        designation: {
          title: 'Désignation'
        },
        code: {
          title: 'Code'
        },

      },
      add: {
        addButtonContent: '<i class="glyphicon glyphicon-plus" aria-hidden="true">Ajouter</i>',
        createButtonContent: '<i class="fa fa-check-square"> Créer</i>',
        cancelButtonContent: '<i class="fa fa-minus-square"> Annuler</i>',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '<i class="glyphicon glyphicon-pencil"></i>',
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
  doSearch() {  this.otaservice.getOtas()
    .subscribe( data => {
      this.pageOta = data;
      console.log( this.pageOta );
      this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }

  ajout(event){

    this.otaservice.saveOta(event.newData)
      .subscribe( data => {
        event.confirm.resolve();
        this.doSearch();
      }, err => {
        console.log( err );
      } );
  }

  edit(event){
    this.otaservice.updateOta(event.newData)
      .subscribe(data=>{
        console.log(data);
        this.doSearch()
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }

  delete(event){
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.otaservice.deleteOta(event.data.idoperateur)
        .subscribe(data => {
          this.doSearch();
        }, err => {
          console.log(err);
        })
    }
  }
  onEditOta(id:number){
    this.router.navigate(['/edit-ota',id]);

  }

  onDeleteOta(o:Ota) {
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.otaservice.deleteOta(o.idoperateur)
        .subscribe(data => {
          this.pageOta.content.splice(
            this.pageOta.content.indexOf(o), 1
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
