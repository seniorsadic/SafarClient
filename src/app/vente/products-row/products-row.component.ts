import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../model/model.produit";

@Component({
  selector: 'app-products-row',
  inputs: ['product'],
  templateUrl: './products-row.component.html',
  styleUrls: ['./products-row.component.css']
})
export class ProductsRowComponent implements OnInit {

  product:Produit;

  constructor() { }

  ngOnInit() {
  }

}
