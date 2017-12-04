
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Personne} from "../model/model.personne";

@Injectable()
export class ContactsService {
constructor(public http: Http) {}

getContacts( motCle: String, page: Number, size: Number) {
  return this.http.get("http://localhost:8080/chercherPersonne?mc="+motCle+"&size="+size+"&page="+page)
    .map(resp => resp.json());
}

  getPersonnels() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/utilisateurs/")
      .map(resp => resp.json());
  }

  getAgences() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/agences")
      .map(resp => resp.json());
  }

  getContact( id:number) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/utilisateur/"+id)
      .map(resp => resp.json());
  }

  savePersonne(personne:Personne) {
    return this.http.post("http://localhost:8080/personnes/",personne)
      .map(resp => resp.json());
  }
  savePersonnel(personne:Personne) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/utilisateur/",personne)
      .map(resp => resp.json());
      }

  updatePersonne(personne:Personne) {
    return this.http.put("http://localhost:8080/personnes/"+personne.iduser,personne)
      .map(resp => resp.json());
  }

  deletePersonne(id:number) {
    return this.http.delete("http://localhost:8080/personnes/"+id)
      .map(resp => resp.json());
  }

  deletePersonnel(id:number) {
    return this.http.delete("http://localhost/Safar18/web/app_dev.php/utilisateur/"+id)
      .map(resp => resp.json());
  }

}
