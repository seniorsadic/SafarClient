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
  constructor(public http: Http, public villeservice: VilleService, public router:Router) { }

  ngOnInit() {
    this.doSearch();
  }
  doSearch() {  this.villeservice.getVilles()
    .subscribe( data => {
      this.pageVille = data;
      console.log( this.pageVille );
      //this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }


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
