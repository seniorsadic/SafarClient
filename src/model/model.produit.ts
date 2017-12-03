import {Agence} from "./model.agence";
import {Categorie} from "./model.categorie";

export  class Produit{
  idproduit:any=null;
  designation:string="";
  quantite:number=0;
  prix:number=0;
  idagence:Agence;
  idcategorie:Categorie;
}
