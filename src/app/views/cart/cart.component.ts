import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/interfaces/product';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private storage: StorageService) {}
  cartProducts!: Product[];
  ngOnInit(): void {
    this.cartProducts = this.storage.getStoredItem('cart');
  }
}
