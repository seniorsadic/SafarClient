
import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Agence} from "../model/model.agence";

@Injectable()
export class AgenceService {
  constructor(public http: Http) {}

  public  uploadImage(formdata: any ) {
    let _url: string = 'http://localhost/Safar18/web/fileUpload.php';
    return this.http.post(_url, formdata) ;

  }

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
  private getHeaders(){
    let headers=new Headers();
    headers.append('Accept','application/json');
    headers.append('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
    return headers;
  }
  upload(agence:any) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/detailsUpload/",agence)
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
