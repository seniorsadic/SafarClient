import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-price',
  inputs: ['price'],
  templateUrl: './products-price.component.html',
  styleUrls: ['./products-price.component.css']
})
export class ProductsPriceComponent implements OnInit {

  price:number;

  constructor() { }

  ngOnInit() {
  }

}
