import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class TrendingComponent implements OnInit {
  constructor() {}
  @Input() trendingProducts!: Product[];
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
  ngOnInit(): void {}
}
