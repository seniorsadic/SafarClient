import { Component, OnInit } from '@angular/core';
import {AgenceService} from "../../services/agence.service";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {Agence} from "../../model/model.agence";

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {


  pageAgence: any;
  pages:any;

  constructor(public http: Http, public agenceservice: AgenceService, public router:Router) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {  this.agenceservice.getAgences()
    .subscribe( data => {
      this.pageAgence = data;
      console.log( this.pageAgence );
      //this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }


  onEditAagence(id:number){
    this.router.navigate(['/edit-agence',id]);

  }

  onDeleteAgence(a:Agence) {
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.agenceservice.deleteAgence(a.idagence)
        .subscribe(data => {
          this.pageAgence.content.splice(
            this.pageAgence.content.indexOf(a), 1
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
