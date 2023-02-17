import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductResponse } from './../interfaces/product';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { StorageService } from './storage.service';
// import { Product } from 'src/app/interfaces/product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private storage: StorageService) {}
  apiURL = environment.apiURL;
  //
  getProducts(productType: string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.apiURL + productType);
  }
  //
  setKey(product: any, key: boolean, position: string) {
    product[position] = key;
  }
  //
  storeProduct(product: Product, position: string) {
    let storedProduct = this.storage.getStoredItem(position) || [];
    // check if ele is alredy exist
    if (
      storedProduct.filter((e: Product) => {
        return e.name == product.name;
      }).length > 0
    ) {
      // lets get the ele index
      let productIndex = storedProduct.indexOf(
        // need to return ele to search by it
        storedProduct.find((ele: Product) => {
          return ele.name == product.name;
        })
      );
      // lets delete the ele
      storedProduct.splice(productIndex, 1);
      // change status of product
      this.setKey(product, false, position);
      // change my old stored product
      this.storage.storageItem(position, JSON.stringify(storedProduct));
    } else {
      // if ele is not exist
      // change status of product
      this.setKey(product, true, position);
      // add product to my stored product
      storedProduct.push(product);
      // change my old stored product
      this.storage.storageItem(position, JSON.stringify(storedProduct));

      if (position == 'compare' && storedProduct.length > 1) {
        document.querySelector('#compare')?.classList.add('active');
      }
    }
  }
  //
  getProductStatus(product: any) {
    let liked = this.storage.getStoredItem('favourite') || [];
    let compare = this.storage.getStoredItem('compare') || [];
    let cart = this.storage.getStoredItem('cart') || [];
    let setKey = (arr: any[], key: string) => {
      if (arr.length == 0) {
        product[key] = false;
      }
      arr.forEach(async () => {
        let strArr = await JSON.stringify(arr);
        let strProd = await JSON.stringify(product.name);
        if (strArr.includes(strProd)) {
          product[key] = true;
        } else {
          product[key] = false;
        }
      });
    };
    [liked, compare, cart].forEach(async (e) => {
      if (e == liked) {
        setKey(e, 'favourite');
      } else if (e == compare) {
        setKey(e, 'compare');
      } else if (e == cart) {
        setKey(e, 'cart');
      }
    });
  }
}
