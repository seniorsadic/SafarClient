
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class RapportService {

  constructor(public http: Http) {
  }

  rapport(idoperateur: string) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/rapportOperateur/"+idoperateur)
      .map(resp => resp.json());
  }
}
