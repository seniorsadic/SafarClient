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


  }

  verifier(){
    let login=this.elem.nativeElement.querySelector('#username').value;
    let pass=this.elem.nativeElement.querySelector('#pass').value;

    if(this.loginService.verifier(login,pass)) {
      this.router.navigate(['/produit']);
    }else{
      this.erreur=1;
    }


   /* if (login.localeCompare('Aziz')==0 && pass.localeCompare('Fall')==0){
      this.syn.setItem('user', 'Aziz').subscribe(() => {});
       localStorage.setItem('test', 'Aziz');
      this.router.navigate(['/produit']);
    }
    else{
      this.erreur=1;
    }*/
    console.log(login+' '+pass)

  }

}
