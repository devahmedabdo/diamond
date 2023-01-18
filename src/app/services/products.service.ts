import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  setKey(product: any, key: boolean, position: string) {
    product[position] = key;
  }
  async storeProduct(product: any, position: string) {
    let stordProduct: any[] = await JSON.parse(
      window.localStorage.getItem(position) || '[]'
    );
    if (
      Array.from(stordProduct).filter((e: any) => e.name == product.name)
        .length > 0
    ) {
      let productIndex = stordProduct.indexOf(
        stordProduct.find((ele) => {
          return ele.name == product.name;
        })
      );
      stordProduct.splice(productIndex, 1);
      this.setKey(product, false, position);
      window.localStorage.setItem(position, JSON.stringify(stordProduct));
    } else {
      // if product not exist
      // console.log('yes');

      this.setKey(product, true, position);
      stordProduct.push(product);
       window.localStorage.setItem(position, JSON.stringify(stordProduct));
      if (position == 'compare' && stordProduct.length > 1) {
        document.querySelector('#compare')?.classList.add('active');
      }
    }
  }
  async getStoreProduct(position: string) {
    let stordProduct = await JSON.parse(
      window.localStorage.getItem(position) || '[]'
    );
    return stordProduct;
  }
}
