import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from './../../../../services/user.service';
import SwiperCore, {
  Pagination,
  SwiperOptions,
  EffectFade,
  Autoplay,
} from 'swiper';
import {
  faArrowLeft,
  faArrowRight,
  faLeftLong,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
SwiperCore.use([Pagination, EffectFade, Autoplay]);
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent implements OnInit {
  constructor(private user: UserService) {}
  star = faStar;
  left = faArrowLeft;
  right = faArrowRight;
  swiperConfig: SwiperOptions = {
    effect: 'fade',
    grabCursor: true,
    // zoom: true,
    // loop: true,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicMainBullets: 2,
      dynamicBullets: true,
    },
  };
  returnarr(number: number) {
    let arr: any[] = [];
    arr.length = number;
    return arr;
  }
  users!: User[];
  ngOnInit(): void {
    this.user.getAllUser().subscribe({
      next: (users) => {
        this.users = users.users.filter((user) => {
          return user.rate != 0;
        });
        // console.log(this.users);
      },
    });
  }
}
