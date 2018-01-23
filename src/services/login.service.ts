
import {Injectable} from "@angular/core";
import {Personne} from "../model/model.personne";
import {AsyncLocalStorage} from "angular-async-local-storage";
import {Http} from "@angular/http";

@Injectable()
export class LoginService {

  constructor(public asyn:AsyncLocalStorage,public http: Http){}

  getUtilisateurByLoginAndPassword(login:String,password:String) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/utilisateur/"+login+'/'+password)
      .map(resp => resp.json());
  }
  verifier(login:string, pass:string):boolean{
      this.getUtilisateurByLoginAndPassword(login,pass) .subscribe( data => {
        console.log(data);
        if ( data==null ){
          localStorage.setItem('user',login);
          return true;
        }
        
      }, err => {
        console.log( err );
      } );
      return false;
  }

  utilisateur():string{
    return localStorage.getItem('user');
  }

  afficherUtilisateur():any{
    return this.asyn.getItem<Personne>('test').subscribe((user) => {
      user.prenoms;
    });
  }

}
