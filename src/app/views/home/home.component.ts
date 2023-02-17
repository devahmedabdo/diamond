import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from './../../services/cart.service';
import { Product, ProductResponse } from 'src/app/interfaces/product';
import SwiperCore, {
  Pagination,
  SwiperOptions,
  EffectFade,
  Autoplay,
} from 'swiper';
SwiperCore.use([Pagination, EffectFade, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor(
    private product: ProductsService,
    private cartService: CartService
  ) {}

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    effect: 'fade',
    grabCursor: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'fraction',
    // },
    freeMode: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    //   // dynamicBullets: true,
    //   // renderBullet: function (index, className) {
    //   //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    //   // },
    // },
  };

  slides: any[] = [
    {
      routerLink: '',
      buttonText: 'shop now',
      image: 'assets/landing/slide1.jpg',
      title: 'Discover the best'.split(' '),
      describe:
        'quo ducimus modi impedit, delectus tempore mollitia assumenda cupiditate unde eos porro nisi! Neque voluptas at et assumenda facere aperiam!',
      imagesBox: {
        path: [
          'assets/landing/boximage2.jpg',
          'assets/landing/boximage1.jpg',
          'assets/landing/boximage3.jpg',
        ],
      },
    },
    {
      routerLink: '',
      buttonText: 'shop now',
      image: 'assets/landing/slide2.jpg',
      title: 'STATEMENT MAKERS'.split(' '),
      describe:
        'Set off a chain reaction with statement styles that boast large profiles and embellished details.',
      imagesBox: {
        path: [
          'assets/landing/boximage3.jpg',
          'assets/landing/boximage4.jpg',
          'assets/landing/boximage5.jpg',
        ],
      },
    },
    {
      routerLink: '',
      buttonText: 'shop now',
      image: 'assets/landing/slide3.jpg',
      title: 'OH, HELLO  SPRING!'.split(' '),
      describe:
        'Set off a chain reaction with statement styles that boast large  profiles and embellished details.',
      imagesBox: {
        path: [
          'assets/landing/boximage4.jpg',
          'assets/landing/boximage5.jpg',
          'assets/landing/boximage6.jpg',
        ],
      },
    },
    {
      routerLink: '',
      buttonText: 'shop now',
      image: 'assets/landing/slide4.jpg',
      title: 'Exquisite style for everyday wear.'.split(' '),
      describe:
        'From brilliant moissanites to our colorful array of sapphires, pair a setting witha sparkling gemstone of your choice.',
      imagesBox: {
        path: [
          'assets/landing/boximage6.jpg',
          'assets/landing/boximage3.jpg',
          'assets/landing/boximage1.jpg',
        ],
      },
    },
  ];

  bestSeller!: Product[];
  trendingProducts!: Product[];

  ngOnInit() {
    this.product.getProducts('bestSeller.json').subscribe({
      next: (bestSellerProducts: ProductResponse) => {
        this.bestSeller = bestSellerProducts.products;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.product.getProducts('trending.json').subscribe({
      next: (trendingProducts: ProductResponse) => {
        this.trendingProducts = trendingProducts.products;
        console.log(this.trendingProducts);
      },
      error: (error) => {
        console.log(error);
      },
    });
    console.log();
  }
}
