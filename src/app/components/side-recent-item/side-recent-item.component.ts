import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blogs';
import { Product, ProductResponse } from 'src/app/interfaces/product';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-side-recent-item',
  templateUrl: './side-recent-item.component.html',
  styleUrls: ['./side-recent-item.component.scss'],
})
export class SideRecentItemComponent implements OnInit {
  constructor(private product: ProductsService) {}
  @Input() recentBlogs!: Blog[];
  @Input() recentProducts!: Product[];

  ngOnInit(): void {}
}
