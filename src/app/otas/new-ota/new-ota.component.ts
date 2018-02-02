import { Component, OnInit } from '@angular/core';
import {Ota} from "../../../model/model.ota";
import {OtaService} from "../../../services/ota.service";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/login.service";
@Component({
  selector: 'app-new-ota',
  templateUrl: './new-ota.component.html',
  styleUrls: ['./new-ota.component.css']
})
export class NewOtaComponent implements OnInit {
  mode:number=1;
  ota: Ota=new Ota();

  constructor(public otaService:OtaService,public router:Router, public loginService:LoginService) { }

  ngOnInit() {
    if (this.loginService.getConnect()!='true'){
      this.router.navigate(['/about']);
    }
  }
  saveOta(){
    this.otaService.saveOta(this.ota)
      .subscribe( data => {
        this.ota=data;
        this.mode=2;
        this.router.navigate(['/ota']);
      }, err => {
        console.log( err );
      } );
  }
}
