import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Blogs } from 'src/app/interfaces/blogs';
import { UserService } from 'src/app/services/user.service';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class BlogsComponent implements OnInit {
  constructor(private user: UserService) {}
  blogConfig: SwiperOptions = {
    slidesPerView: 3,
    loop: true,
    // spaceBetween: 20,
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
  blogs!: Blogs[];
  ngOnInit(): void {
    this.user.getBlogs().subscribe({
      next: (data) => {
        this.blogs = data.blogs;
        console.log(this.blogs);
      },
    });
  }
}
