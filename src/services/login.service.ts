
import {Injectable, OnInit} from "@angular/core";
import {Personne} from "../model/model.personne";
import {AsyncLocalStorage} from "angular-async-local-storage";
import {Http} from "@angular/http";
import {isEmpty} from "rxjs/operators";
import {isNull} from "util";
import {RoleUtilisateur} from "../model/model.roleutilisateur";
import {Router} from "@angular/router";

@Injectable()
export class LoginService {



  constructor(public http: Http, public router:Router){}

  getRoleByUtilisateur(id:number) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/userrole/"+id)
      .map(resp => resp.json()) ;
  }

  getUtilisateur() {
    this.http.get("http://localhost/Safar18/web/app_dev.php/utilisateur")
      .map(resp => resp.json()) .subscribe( data => {
         data;
    }, err => {
      console.log( err );
    } );
  }

  getUtilisateurByLoginAndPassword(login:string,password:string) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/utilisateur/"+login+'/'+password)
      .map(resp => resp.json()) ;
  }

  verifier(ob:any){
    localStorage.setItem('connect','true');
    localStorage.setItem('user',ob.prenoms+' '+ob.nom);
    this.getRoleByUtilisateur(ob.iduser).subscribe(data => {
      localStorage.setItem('role',data.idrole.nom);
    }, err => {
      console.log( err );
    });
    localStorage.setItem('agence',ob.idagence.idagence);

  }

  utilisateur():string{
    return localStorage.getItem('user');
  }

  getRoles():string{
    return localStorage.getItem('role');
  }

  getConnect():string{
    return localStorage.getItem('connect');
   }

  deconnection(){
    localStorage.clear();
    this.router.navigate(['/about']);
  }

}
