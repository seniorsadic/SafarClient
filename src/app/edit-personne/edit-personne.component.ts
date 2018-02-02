import { Component, OnInit } from '@angular/core';
import {Personne} from "../../model/model.personne";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactsService} from "../../services/contacts.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-edit-personne',
  templateUrl: './edit-personne.component.html',
  styleUrls: ['./edit-personne.component.css']
})
export class EditPersonneComponent implements OnInit {
personne:Personne=new Personne();
mode:number=1;
idPersonne:number;
  pageAgence:any;
  constructor( public activatedRoute:ActivatedRoute, public personneService:ContactsService, public router:Router, public loginService:LoginService) {
   this.idPersonne=activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    if (this.loginService.getConnect()!='true'){
      this.router.navigate(['/about']);
    }
    this.personneService.getContact(this.idPersonne)
      .subscribe(data=>{
      this.personne=data},
        err=>{console.log(err);
      }
      )

    this.personneService.getAgences()
      .subscribe( data => {
        this.pageAgence = data;
        console.log( this.pageAgence );
        //this.pages= new Array(data.totalPages);
      }, err => {
        console.log( err );
      } );
  }


  updatePersonne(){
    this.personneService.updatePersonne(this.personne)
      .subscribe(data=>{
        console.log(data);
        alert("mise à jour effectuée");
        this.router.navigate(["personne"])
      },err=>{
        console.log(err);
        alert("Probléme");
      })
  }
}
