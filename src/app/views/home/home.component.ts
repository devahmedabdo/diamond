import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from './../../services/cart.service';
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
  encapsulation: ViewEncapsulation.None,
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
  productConfig: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: true,
    // },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      // 700: {
      //   slidesPerView: 1,
      //   spaceBetween: 0,
      // },
      800: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      // 900: {
      //   slidesPerView: 2,
      //   spaceBetween: 50,
      //   autoplay: false,
      // },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    // effect: 'fade',
    grabCursor: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    // loop: true,
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'fraction',
    // },
    // freeMode: true,
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
  setSrc(img: any) {
    let smallimg = img as HTMLElement;
    let bigImgDiv = smallimg.parentElement?.parentElement;
    let bigImgs = bigImgDiv?.querySelectorAll('img');
    bigImgs?.forEach((img) => {
      img.classList.add('hide');
    });
    let bigImg = bigImgDiv?.querySelectorAll(
      `img[src="${img.getAttribute('src')}"]`
    )[1];
    bigImg?.classList.remove('hide');
  }
  // setSrc(img: any) {
  //   let smallImg = img.src;
  //   let bigImg = img.parentElement.nextSibling as HTMLImageElement;

  //   img.src = bigImg.src;
  //   bigImg.src = smallImg;
  // }
  bestSeller = [
    {
      name: 'Aerodynamic Wooden Hat',
      price: 213.0,
      disscount: 20,
      stock: 30,
      image1: 'assets/product/product-1 (1).jpg',
      image2: 'assets/product/product-1 (2).jpg',
      image3: 'assets/product/product-1 (3).jpg',
      image4: 'assets/product/product-1 (4).jpg',
      // favourite: false,
      // cart: false,
      // compare: false,
      review: 1,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
    {
      name: 'Durable Marble Bench',
      price: 126.0,
      disscount: 30,
      stock: 30,
      image1: '../../../assets/product/10.1.jpg',
      image2: '../../../assets/product/12.1.jpg',
      image3: 'assets/product/product-1 (3).jpg',
      image4: 'assets/product/product-1 (4).jpg',
      // favourite: false,
      // cart: false,
      // compare: false,
      review: 0,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
    {
      name: 'Heavy Duty Steel Wallet',
      price: 340,
      disscount: 20,
      stock: 30,
      image1: 'assets/product/7.1.jpg',
      image2: 'assets/product/8.1.jpg',
      image3: 'assets/product/7.1.jpg',
      image4: 'assets/product/8.1.jpg',
      // favourite: false,
      // cart: false,
      // compare: false,
      review: 4.3,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
    {
      name: 'Small Linen Lamp',
      price: 487.0,
      disscount: 20,
      stock: 30,
      image1: '../../../assets/product/4.1.jpg',
      image2: '../../../assets/product/5.1.jpg',
      image3: '../../../assets/product/4.1.jpg',
      image4: '../../../assets/product/5.1.jpg',
      // favourite: false,
      // compare: false,
      // cart: false,
      review: 5,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
    {
      name: 'Elara Diamond Ring',
      price: 100,
      disscount: 10,
      stock: 30,
      image1: '../../../assets/product/9.1.jpg',
      image2: '../../../assets/product/6.1.jpg',
      image3: '../../../assets/product/9.1.jpg',
      image4: '../../../assets/product/6.1.jpg',
      // favourite: false,
      // cart: false,
      // compare: false,
      review: 2,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
  ];
  trendingProduct = [
    {
      name: 'Aerodynamic Wooden Hat',
      price: 213.0,
      disscount: 20,
      stock: 30,
      image1: 'assets/product/11.1.jpg',
      image2: 'assets/product/13.1.jpg',
      // favourite: false,
      // cart: false,
      // compare: false,
      review: 4.3,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
    {
      name: 'Durable Marble Bench',
      price: 126.0,
      disscount: 30,
      stock: 30,
      image1: '../../../assets/product/10.1.jpg',
      image2: '../../../assets/product/12.1.jpg',
      // favourite: false,
      // cart: false,
      // compare: false,
      review: 4.5,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
    {
      name: 'Heavy Duty Steel Wallet',
      price: 340,
      disscount: 20,
      stock: 30,
      image1: '../../../assets/product/7.1.jpg',
      image2: '../../../assets/product/8.1.jpg',
      // favourite: false,
      // cart: false,
      // compare: false,
      review: 3.5,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
    {
      name: 'Small Linen Lamp',
      price: 487.0,
      disscount: 20,
      stock: 30,
      image1: '../../../assets/product/4.1.jpg',
      image2: '../../../assets/product/5.1.jpg',
      // favourite: false,
      // compare: false,
      // cart: false,
      review: 2.3,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
    {
      name: 'Elara Diamond Ring',
      price: 100,
      disscount: 10,
      stock: 30,
      image1: '../../../assets/product/9.1.jpg',
      image2: '../../../assets/product/6.1.jpg',
      // favourite: false,
      // cart: false,
      // compare: false,
      review: 1.5,
      sellerCount: 44,
      seller: 'jewlarry home',
      type: ['ring', 'diamond', 'NECKLACES & PENDANTS'],
    },
  ];
  async ngOnInit() {
    // let compareList = await this.product.getStoreProduct('compare');
    // this.compare = compareList;
  }
}
