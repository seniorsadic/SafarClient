
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Agence} from "../model/model.agence";

@Injectable()
export class AgenceService {
  constructor(public http: Http) {}


  getAgences() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/agences")
      .map(resp => resp.json());
  }

  getAgence( id:number) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/agence/"+id)
      .map(resp => resp.json());
  }


  saveAgence(agence:Agence) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/agence/",agence)
      .map(resp => resp.json());
  }

  updateAgence(agence:Agence) {
    return this.http.put("http://localhost/Safar18/web/app_dev.php/agence/"+agence.idagence,agence)
      .map(resp => resp.json());
  }

  deleteAgence(id:number) {
    return this.http.delete("http://localhost/Safar18/web/app_dev.php/agence/"+id)
      .map(resp => resp.json());
  }

  getVilles() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/villes")
      .map(resp => resp.json());
  }

}
