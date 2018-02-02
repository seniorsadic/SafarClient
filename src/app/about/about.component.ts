import {Component, ElementRef, OnInit} from '@angular/core';
import {AsyncLocalStorage} from "angular-async-local-storage";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  erreur:number=0;
  constructor(public syn:AsyncLocalStorage, private elem: ElementRef, public router:Router, public loginService:LoginService) { }

  ngOnInit() {
  //  let user: User = { firstName: 'Henri', lastName: 'Bergson' };
    if (this.loginService.getConnect()=='true'){
      this.router.navigate(['/agence']);
    }
  }

  verifier(){
    let login=this.elem.nativeElement.querySelector('#username').value;
    let pass=this.elem.nativeElement.querySelector('#pass').value;
    console.log('Test');
    this.loginService.getUtilisateurByLoginAndPassword(login,pass).subscribe( data => {
      console.log('Bien');
      if (data != null) {
        this.loginService.verifier(data);
        this.router.navigate(['/produit']);
      } else {
        this.erreur=1;
      }
    }, err => {
      console.log( err );
    } );
  }

}
