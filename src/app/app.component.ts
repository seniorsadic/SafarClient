import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AsyncLocalStorage} from "angular-async-local-storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private router: Router, private route:ActivatedRoute, public syn:AsyncLocalStorage) { }
}
