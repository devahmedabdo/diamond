import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { CartService } from './../../services/cart.service';
import {
  faCartShopping,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  clickEventSubscribtion: Subscription;
  constructor(private cartService: CartService) {
    this.clickEventSubscribtion = this.cartService.getItems().subscribe(() => {
      this.getStored();
    });
  }
  heart = faHeart;
  cart = faCartShopping;
  search = faSearch;
  user = faUser;
  //////////
  loged = false;
  currency: string = 'usa';
  setCurrency(currency: string) {
    this.currency = currency;
  }
  /////////

  ////////
  lovedItems: any[] = [];
  cartItems: any[] = [];
  menuBox?: HTMLElement;
  menuBtn?: HTMLElement;
  searchBtn?: HTMLElement;
  searchBox?: HTMLElement;
  userBtn?: HTMLElement;
  userBox?: HTMLElement;

  changeActive(arr: any, active?: any) {
    arr.forEach((e: HTMLElement) => {
      // console.log(e);
      if (e.classList.contains('active')) {
        return e.classList.remove('active');
      }
      e.classList.add('active');
    });
  }
  async getStored() {
    let favourite = await JSON.parse(
      window.localStorage.getItem('favourite') || '[]'
    );
    let cart = await JSON.parse(window.localStorage.getItem('cart') || '[]');
    this.lovedItems = favourite;
    this.cartItems = cart;
  }
  async ngOnInit() {
    this.menuBox = document.querySelector('header nav > ul') as HTMLElement;
    this.menuBtn = document.querySelector('header .menu-icon') as HTMLElement;
    this.searchBtn = document.querySelector('.search-icon') as HTMLElement;
    this.searchBox = document.querySelector(
      'header .search-box'
    ) as HTMLElement;
    this.userBtn = document.querySelector('.user-icon') as HTMLElement;
    this.userBox = document.querySelector('header .user-box') as HTMLElement;
    // console.log(this.cs.cartLength);
    this.getStored();
  }
}
