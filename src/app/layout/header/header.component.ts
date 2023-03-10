import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faEdit, faHeart } from '@fortawesome/free-regular-svg-icons';
import { CartService } from './../../services/cart.service';
import {
  faCartShopping,
  faDashboard,
  faSearch,
  faUser,
  faUserEdit,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  clickEventSubscribtion: Subscription;
  constructor(
    private cartService: CartService,
    private userServices: UserService
  ) {
    this.clickEventSubscribtion = this.cartService.getItems().subscribe(() => {
      this.getStored();
    });
  }
  heart = faHeart;
  cart = faCartShopping;
  search = faSearch;
  user = faUser;
  dashboard = faDashboard;
  dashboard2 = faEdit;
  dashboard3 = faUserEdit;
  dashboard4 = faUserSecret;
  //////////
  activeMenu: boolean = false;
  activeSearch: boolean = false;
  activeUserMenu: boolean = false;

  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
    this.activeUserMenu = false;
    this.activeSearch = false;
  }
  reflectActiveUserMenu() {
    this.activeMenu = false;
    this.activeUserMenu = !this.activeUserMenu;
    this.activeSearch = false;
  }
  reflectActiveSearch() {
    this.activeMenu = false;
    this.activeUserMenu = false;
    this.activeSearch = !this.activeSearch;
  }

  //////////
  loged = false;

  currency: string = 'usa';
  setCurrency(currency: string) {
    this.currency = currency;
  }

  ////////
  lovedItems: any[] = [];
  cartItems: any[] = [];
  profile?: User;
  userNews: any;

  getStored() {
    let favourite = JSON.parse(
      window.localStorage.getItem('favourite') || '[]'
    );
    let cart = JSON.parse(window.localStorage.getItem('cart') || '[]');
    this.lovedItems = favourite;
    this.cartItems = cart;
  }
  logout() {
    console.log('logout');
  }
  ngOnInit() {
    this.getStored();
    this.userServices.getUserData().subscribe({
      next: (data) => {
        this.profile = data.profile;
        console.log(this.profile);
        this.userNews = data.news;
      },
      error: (err) => {
        console.log(err);
      },
    });
    // console.log(this.profile?.avatar);
  }
}
