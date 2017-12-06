import {Personne} from "./model.personne";

export  class Operation{
  idOperation:any=null;
  reference:string="";
  service:string="";
  statut:string="";
  montant:number=0;
  date:string="";
  idUser:Personne;
}
