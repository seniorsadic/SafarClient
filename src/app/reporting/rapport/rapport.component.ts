import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {RapportService} from "../../../services/rapport.service";
import {OtaService} from "../../../services/ota.service";

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {

  listeTransfert: any;
  nombre:number;
  commission: number=0;
  date:string;

  constructor(public http: Http, public rapportService: OtaService) { }

  ngOnInit() {
    this.gestionTransfert();
  }

  gestionTransfert(){
    this.rapportService.rapport('3')
      .subscribe( data => {
        this.listeTransfert = data;
        this.nombre=this.listeTransfert.length;
        console.log( this.listeTransfert );
        for(var i =0; i < this.listeTransfert.length; i++){
          if(i==0)
            this.date=this.listeTransfert[i].idoperation.date;
          this.commission+=this.listeTransfert[i].commission;
        }

      }, err => {
        console.log( err );
      } );
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
