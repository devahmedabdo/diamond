import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  Pagination,
  SwiperOptions,
  EffectFade,
  Autoplay,
} from 'swiper';
SwiperCore.use([Pagination, EffectFade, Autoplay]);
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {
  swiperConfig: SwiperOptions = {
    // slidesPerView: 1,
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
  constructor() {}
  setSrc(img: any) {
    let srcOfThumb = img.src;
    let smallImg = img as HTMLImageElement;
    let bigImg = smallImg.parentElement?.parentElement?.getElementsByTagName(
      'img'
    )[3] as HTMLImageElement;
    smallImg.src = bigImg.src;
    bigImg.src = srcOfThumb;
  }

  slides: any[] = [
    {
      routerLink: '',
      buttonText: 'shop now',
      image: 'assets/landing/slides/slide1.webp',
      title: 'Discover the best'.split(' '),
      describe:
        'quo ducimus modi impedit, delectus tempore mollitia assumenda cupiditate unde eos porro nisi! Neque voluptas at et assumenda facere aperiam!',
      imagesBox: {
        path: [
          'assets/landing/slides/boximage2.webp',
          'assets/landing/slides/boximage1.webp',
          'assets/landing/slides/boximage3.webp',
        ],
      },
    },
    {
      routerLink: '',
      buttonText: 'shop now',
      image: 'assets/landing/slides/slide2.webp',
      title: 'STATEMENT MAKERS'.split(' '),
      describe:
        'Set off a chain reaction with statement styles that boast large profiles and embellished details.',
      imagesBox: {
        path: [
          'assets/landing/slides/boximage3.webp',
          'assets/landing/slides/boximage4.webp',
          'assets/landing/slides/boximage5.webp',
        ],
      },
    },
    {
      routerLink: '',
      buttonText: 'shop now',
      image: 'assets/landing/slides/slide3.webp',
      title: 'OH, HELLO  SPRING!'.split(' '),
      describe:
        'Set off a chain reaction with statement styles that boast large  profiles and embellished details.',
      imagesBox: {
        path: [
          'assets/landing/slides/boximage4.webp',
          'assets/landing/slides/boximage5.webp',
          'assets/landing/slides/boximage6.webp',
        ],
      },
    },
    {
      routerLink: '',
      buttonText: 'shop now',
      image: 'assets/landing/slides/slide4.webp',
      title: 'Exquisite style for everyday wear.'.split(' '),
      describe:
        'From brilliant moissanites to our colorful array of sapphires, pair a setting witha sparkling gemstone of your choice.',
      imagesBox: {
        path: [
          'assets/landing/slides/boximage6.webp',
          'assets/landing/slides/boximage3.webp',
          'assets/landing/slides/boximage1.webp',
        ],
      },
    },
  ];
  ngOnInit(): void {}
}
