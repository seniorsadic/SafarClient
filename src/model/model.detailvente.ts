import {Vente} from "./model.vente";
import {Produit} from "./model.produit";

export  class DetailVente{
  idDetailVente:any=null;
  quantite:string="";
  prixUnitaire:number;
  remise:number=0;
  idVente:Vente;
  idProduit:Produit;
}
