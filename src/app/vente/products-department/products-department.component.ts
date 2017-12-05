import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../model/model.produit";

@Component({
  selector: 'app-products-department',
  inputs: ['product'],
  templateUrl: './products-department.component.html',
  styleUrls: ['./products-department.component.css']
})
export class ProductsDepartmentComponent implements OnInit {

  product:Produit;

  constructor() { }

  ngOnInit() {
  }

}
