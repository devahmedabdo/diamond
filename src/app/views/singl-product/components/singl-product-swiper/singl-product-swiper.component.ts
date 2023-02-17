import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, {
  FreeMode,
  Navigation,
  SwiperOptions,
  Thumbs,
} from 'swiper';
import { Product } from '../../../../interfaces/product';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-singl-product-swiper',
  templateUrl: './singl-product-swiper.component.html',
  styleUrls: ['./singl-product-swiper.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class SinglProductSwiperComponent implements OnInit {
  @Input() productInfo!: Product;
  config1: SwiperOptions = {
    slidesPerView: 1,
    // effect: 'fade',
    grabCursor: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
      prevEl: '.prev1',
      nextEl: '.next1',
    },
  };
  config2: SwiperOptions = {
    slidesPerView: 1,
    // effect: 'fade',
    grabCursor: true,
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
      prevEl: '.prev2',
      nextEl: '.next2',
    },
  };
  constructor() {}
  thumbsSwiper: any;
  ngOnInit(): void {}
}
