
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Vente} from "../model/model.vente";
import {Operation} from "../model/model.operation";
import {DetailVente} from "../model/model.detailvente";

@Injectable()
export class VenteService {

  constructor(public http: Http) {}

  saveVente(operation:Operation) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/vente/",operation)
      .map(resp => resp.json());
  }

  saveVenteProduit(detailVente:DetailVente) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/detailsVente/",detailVente)
      .map(resp => resp.json());
  }

}
