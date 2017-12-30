import { Component, OnInit } from '@angular/core';
import {AgenceService} from "../../services/agence.service";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {Agence} from "../../model/model.agence";
import {VilleService} from "../../services/ville.service";
import { Teste} from "../../model/model.test";

@Component({
  selector: 'app-agences',
  templateUrl: './agences.component.html',
  styleUrls: ['./agences.component.css']
})
export class AgencesComponent implements OnInit {


  pageAgence: any;
  pages:any;
  tester:Teste[];
  listVille:any;
  settings:any ;

  constructor(public http: Http, public agenceservice: AgenceService,
              public vileservice: VilleService,public router:Router) { }

  ngOnInit() {
    this.tester=[];
    this.doSearch();
    this.settings={
      mode: 'external',
      columns: {
        idagence: {
          title: 'Identifiant',
          width:  '70px'
        },
        designation: {
          title: 'Designation'
        },
        idville: {
          title: 'Ville',
          type: 'html',
          valuePrepareFunction: (value) => {
            return value.designation;
          },
          editor: {
            type: 'completer',  // 下拉选择
            config: {
              /*list:this.doSearchVille(),*/
              completer: {
                data:this.doSearchVille(),
                searchFields: 'idville',
                titleField: 'designation',
                descriptionField: 'designation'
              },
            },
          }
        }
      },
      add: {
        addButtonContent: '<i class="fa fa-plus-circle" aria-hidden="true"> Ajouter</i>',
        createButtonContent: '<i class="fa fa-check-square"> Créer</i>',
        cancelButtonContent: '<i class="fa fa-minus-square"> Annuler</i>',
        confirmCreate: true
      },
      edit: {
        editButtonContent: '<i class="fa fa-pencil"> </i>',
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

  doSearch() {  this.agenceservice.getAgences()
    .subscribe( data => {
      this.pageAgence = data;
      console.log( this.pageAgence );
      //this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }

  doSearchVille():any {  this.vileservice.getVilles()
    .subscribe( data => {
      this.listVille = data;
     var liste:string="[";
      var passe=[{ value: 1, title: 'Dakar' },{ value: 2, title: 'Touba' }];
      for(var i = 0; i < this.listVille.length; i++){
        var test:Teste=new Teste();
        test.value=this.listVille[i].idville;
        test.title=this.listVille[i].designation;
        this.tester.push(test);
        liste+="{ value: "+this.listVille[i].idville+", title: "+this.listVille[i].designation+"},";
      }
      liste+="]";
      console.log(passe );
      return data;

      //this.pages= new Array(data.totalPages);
    }, err => {
      console.log( err );
    } ); }


  onEditAagence(id:number){
    this.router.navigate(['/edit-agence',id]);

  }

  ajout(event){
    this.router.navigate(['/new-agence']);
  }

  edit(event){
    console.log(event.data);
    this.router.navigate(['/edit-agence',event.data.idagence]);
  }
  delete(event){
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.agenceservice.deleteAgence(event.data.idagence)
        .subscribe(data => {
          this.doSearch();
        }, err => {
          console.log(err);
        })
    }
  }

  onDeleteAgence(a:Agence) {
    let confirm = window.confirm("est vous sure?");
    if (confirm == true) {
      this.agenceservice.deleteAgence(a.idagence)
        .subscribe(data => {
          this.pageAgence.content.splice(
            this.pageAgence.content.indexOf(a), 1
          );
          this.router.navigate(['/agence']);

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
