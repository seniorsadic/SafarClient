
import {Injectable} from '@angular/core';
import {Http} from '@angular/http'
import {Ville} from "../model/model.ville";

@Injectable()
export class VilleService {
  constructor(public http: Http) {}


  getVilles() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/villes")
      .map(resp => resp.json());
  }

  getVille( id:number) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/ville/"+id)
      .map(resp => resp.json());
  }


  saveVille(ville:Ville) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/ville/",ville)
      .map(resp => resp.json());
  }

  updateVille(ville:Ville) {
    return this.http.put("http://localhost/Safar18/web/app_dev.php/ville/"+ville.idville,ville)
      .map(resp => resp.json());
  }

  deleteVille(id:number) {
    return this.http.delete("http://localhost/Safar18/web/app_dev.php/ville/"+id)
      .map(resp => resp.json());
  }

 /* getVilles() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/villes")
      .map(resp => resp.json());
  }*/

}
