import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { StorageService } from './../../services/storage.service';

@Component({
  selector: 'app-singl-product',
  templateUrl: './singl-product.component.html',
  styleUrls: ['./singl-product.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SinglProductComponent implements OnInit {
  constructor(private storage: StorageService) {}
  productInfo!: Product;
  routes: any[] = [
    {
      name: 'products',
      rout: '/products',
    },
    {
      name: '',
    },
  ];
  ngOnInit() {
    this.productInfo = this.storage.getStoredItem('singlProduct');
    console.log(this.productInfo);
  }
}
