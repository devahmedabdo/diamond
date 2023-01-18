import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  cartProducts: any;
  ngOnInit(): void {
    this.cartProducts = this.productsService.getStoreProduct('cart');
  }
}
