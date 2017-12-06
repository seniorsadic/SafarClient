
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Agence} from "../model/model.agence";
import {Produit} from "../model/model.produit";
import {Categorie} from "../model/model.categorie";
import {Operation} from "../model/model.operation";

@Injectable()
export class ProduitService {
  constructor(public http: Http) {}

  saveVente(operation:Operation) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/vente/",operation)
      .map(resp => resp.json());
  }

  getProduits() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/produits")
      .map(resp => resp.json());
  }

  getProduit( id:number) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/produit/"+id)
      .map(resp => resp.json());
  }

  getCategorie( id:number) {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/categorie/"+id)
      .map(resp => resp.json());
  }
  saveProduit(produit:Produit) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/produit/",produit)
      .map(resp => resp.json());
  }

  updateProduit(produit:Produit) {
    return this.http.put("http://localhost/Safar18/web/app_dev.php/produit/"+produit.idproduit,produit)
      .map(resp => resp.json());
  }

  deleteProduit(id:number) {
    return this.http.delete("http://localhost/Safar18/web/app_dev.php/produit/"+id)
      .map(resp => resp.json());
  }

  getAgences() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/agences")
      .map(resp => resp.json());
  }
  saveCategorie(categorie:Categorie) {
    return this.http.post("http://localhost/Safar18/web/app_dev.php/categorie/",categorie)
      .map(resp => resp.json());
  }

  getCategories() {
    return this.http.get("http://localhost/Safar18/web/app_dev.php/categories")
      .map(resp => resp.json());
  }
  updateCategorie(categorie:Categorie) {
    return this.http.put("http://localhost/Safar18/web/app_dev.php/categorie/"+categorie.idcategorie,categorie)
      .map(resp => resp.json());
  }

  deleteCategorie(id:number) {
    return this.http.delete("http://localhost/Safar18/web/app_dev.php/categorie/"+id)
      .map(resp => resp.json());
  }
}
