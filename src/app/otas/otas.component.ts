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
  constructor(public http: Http, public otaservice: OtaService, public router:Router) { }

  ngOnInit() {
    this.doSearch();
  }
  doSearch() {  this.otaservice.getOtas()
    .subscribe( data => {
      this.pageOta = data;
      console.log( this.pageOta );
      this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }


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
