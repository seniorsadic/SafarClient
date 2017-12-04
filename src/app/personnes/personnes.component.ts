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
  constructor( public http: Http, public contactservice: ContactsService, public router:Router) { }

  ngOnInit() {
      this.doSearch();
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
