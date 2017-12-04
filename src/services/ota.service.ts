
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Ota} from "../model/model.ota";


@Injectable()
export class OtaService {
  constructor(public http: Http) {}


  getOtas() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/otas")
      .map(resp => resp.json());
  }

  getOta( id:number) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/ota/"+id)
      .map(resp => resp.json());
  }


  saveOta(ota:Ota) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/ota/",ota)
      .map(resp => resp.json());
  }

  updateOta(ota:Ota) {
    return this.http.put("http://localhost/Safar18/web/app_dev.php/agence/"+ota.idoperateur,ota)
      .map(resp => resp.json());
  }

  deleteOta(id:number) {
    return this.http.delete("http://localhost/Safar18/web/app_dev.php/ota/"+id)
      .map(resp => resp.json());
  }



}
