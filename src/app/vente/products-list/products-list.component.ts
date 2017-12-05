import {Component, EventEmitter, OnInit} from '@angular/core';
import {Produit} from "../../../model/model.produit";

@Component({
  selector: 'app-products-list',
  inputs: ['productsList'],
  outputs:['onProductSelected'],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList:Produit[];
  onProductSelected:EventEmitter<Produit>;
  private currentProduct:Produit;

  constructor() {
    this.onProductSelected=new EventEmitter();
  }

  ngOnInit() {
  }


  clicked(product: Produit): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Produit): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.idproduit === this.currentProduct.idproduit;
  }

}
