import { Component, OnInit } from '@angular/core';
import { Product, ProductResponse } from 'src/app/interfaces/product';
import { ProductsService } from './../../../../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(private product: ProductsService) {}
  necklaces!: number;
  earning!: number;
  bracelet!: number;
  filterCategory(arr: Product[], category: string): Product[] {
    return arr.filter((ele) => {
      return ele.tags.includes(category);
    });
  }
  ngOnInit(): void {
    this.product.getProducts('product.json').subscribe({
      next: (product: ProductResponse) => {
        this.bracelet = this.filterCategory(
          product.products,
          'bracelet'
        ).length;
        this.earning = this.filterCategory(product.products, 'earning').length;
        this.necklaces = this.filterCategory(
          product.products,
          'necklaces'
        ).length;
      },
    });
  }
}
