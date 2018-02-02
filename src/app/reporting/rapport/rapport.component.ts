import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {RapportService} from "../../../services/rapport.service";
import {OtaService} from "../../../services/ota.service";
import {CurrencyPipe} from "@angular/common";
import { LOCALE_ID } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {

  listeTransfert: any;
  listeOTA:any;
  nombre:number=0;
  nombreReussit:number=0;
  nombreEchec:number=0;
  nombreEnvoi:number=0;
  montantEnvoi: number=0;
  nombreRetrait:number=0;
  montantRetrait: number=0;
  commission: number=0;
  montant: number=0;
  date:string;
  operateur:any;

  constructor(public http: Http, public rapportService: OtaService,public router:Router, public loginService:LoginService) { }

  ngOnInit() {
    if (this.loginService.getConnect()!='true'){
      this.router.navigate(['/about']);
    }
    this.chargerOTA();
  }

  chargerOTA(){
    this.rapportService.getOtas()
      .subscribe( data => {
        this.listeOTA = data;
      }, err => {
        console.log( err );
      } );
  }


  gestionTransfert(id:any){
    this.operateur=id;
    this.rapportService.rapport(id.idoperateur)
      .subscribe( data => {
        this.listeTransfert = data;
        this.nombre=this.listeTransfert.length;
        this.nombreReussit=0;
        this.nombreEchec=0;
        this.nombreEnvoi=0;
        this.montantEnvoi=0;
        this.nombreRetrait=0;
        this.montantRetrait=0;
        this.commission=0;
        this.montant=0;
        for(var i =0; i < this.listeTransfert.length; i++){
          console.log( this.listeTransfert[i].idoperation.statut );
          if(i==0)
            this.date=this.listeTransfert[i].idoperation.date;
          if((this.listeTransfert[i].idoperation.statut).localeCompare('Succès')==0){
            this.nombreReussit+=1;
            if((this.listeTransfert[i].idoperation.service).localeCompare('Cash Out')==0){
              this.nombreRetrait+=1;
              this.montantRetrait+=this.listeTransfert[i].idoperation.montant;
            }
            else {
              this.nombreEnvoi+=1;
              this.montantEnvoi+=this.listeTransfert[i].idoperation.montant;
            }
            this.montant+=this.listeTransfert[i].idoperation.montant;
          }
          else
            this.nombreEchec+=1;
          this.commission+=this.listeTransfert[i].commission;
        }

      }, err => {
        console.log( err );
      } );
  }

  reactualiser(){

  }

  // lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';

  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
