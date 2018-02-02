import { Component, OnInit } from '@angular/core';
import {Personne} from "../../model/model.personne";
import {ContactsService} from "../../services/contacts.service";
import {Agence} from "../../model/model.agence";
import {Router} from "@angular/router";
import {Role} from "../../model/model.role";
import {RoleUtilisateur} from "../../model/model.roleutilisateur";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-new-personne',
  templateUrl: './new-personne.component.html',
  styleUrls: ['./new-personne.component.css']
})
export class NewPersonneComponent implements OnInit {
mode:number=1;
  personne: Personne=new Personne();
  role: Role=new Role();
  pageAgence:any;
  pageRole:any;
  agence:any;
  pers:RoleUtilisateur=new RoleUtilisateur();

  constructor( public personneService:ContactsService,public router:Router, public loginService:LoginService) { }

  ngOnInit() {
    if (this.loginService.getConnect()!='true'){
      this.router.navigate(['/about']);
    }
    this.getAgences();
    this.getRoles();
  }

  savePersonne(){
    this.personneService.savePersonnel(this.personne)
      .subscribe( data => {

        this.personne=data;
        this.pers.idrole=this.role.idrole;
        this.pers.iduser=this.personne.iduser;
        this.personneService.UserRoles(this.pers).subscribe(data => {
          console.log(data);
        }, err => {
          console.log( err );
        });
        console.log("bien");
         //this.mode=2;
        this.router.navigate(['/personne']);
      }, err => {
        console.log( err );
      } );
  }

  getAgences(){
    this.personneService.getAgences()
      .subscribe( data => {
        this.pageAgence=data;
        //this.mode=2;

      }, err => {
        console.log( err );
      } );


          }

  getRoles(){
    this.personneService.getRoles()
      .subscribe( data => {
        this.pageRole=data;
        //this.mode=2;

      }, err => {
        console.log( err );
      } );


  }
}
