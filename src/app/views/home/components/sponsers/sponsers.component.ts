import { Component, OnInit } from '@angular/core';
import { Sponsers } from 'src/app/interfaces/sponsers';
import { UserService } from './../../../../services/user.service';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.scss'],
})
export class SponsersComponent implements OnInit {
  constructor(private user: UserService) {}
  sponsersConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },

    breakpoints: {
      0: {
        slidesPerView: 2,
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
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    // effect: 'fade',
    grabCursor: true,
    // autoplay: {
    //   delay: 2500,
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
  sponsers!: Sponsers[];
  ngOnInit(): void {
    this.user.getSponsers().subscribe({
      next: (data) => {
        this.sponsers = data.sponsers;
        // console.log(this.sponsers);
      },
    });
  }
}
