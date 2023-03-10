import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class BestSellerComponent implements OnInit {
  @Input() bestSeller!: Product[];
  constructor() {}

  ngOnInit(): void {}
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
        spaceBetween: 20,
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
}
