import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
///
///
///
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
})
export class CompareComponent implements OnInit {
  clickEventSubscribtion: Subscription;
  constructor(
    private cartService: CartService,
    private product: ProductsService
  ) {
    this.clickEventSubscribtion = this.cartService.getItems().subscribe(() => {
      this.getStored();
    });
  }
  compare: any[] = [];
  async getStored() {
    let compare = await JSON.parse(
      window.localStorage.getItem('compare') || '[]'
    );
    this.compare = compare;
  }
  async storeProduct(index: any, position: string) {
    await this.product.storeProduct(index, position);
    await this.cartService.setItems();
  }
  removeActive() {
    document.querySelector('#compare')?.classList.remove('active');
    // console.log(document.querySelector('.compare.active'));
  }
  ngOnInit(): void {
    this.getStored();
  }
}
