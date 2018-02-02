import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AsyncLocalStorage} from "angular-async-local-storage";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';
  constructor(private router: Router, private route:ActivatedRoute, public loginService:LoginService)
  { }

  ngOnInit(){

  }
}
