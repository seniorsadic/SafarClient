import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../model/model.produit";

@Component({
  selector: 'app-products-image',
  host: {class: 'ui small image'},
  inputs: ['product'],
  templateUrl: './products-image.component.html',
  styleUrls: ['./products-image.component.css']
})
export class ProductsImageComponent implements OnInit {

  product:Produit;

  constructor() { }

  ngOnInit() {
  }

}
