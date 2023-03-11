import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 })),
      ]),
      transition(':leave', [animate(100, style({ opacity: 0 }))]),
    ]),
  ],
})
export class ProductsComponent implements OnInit {
  constructor() {}
  show: boolean = true;
  divs: any = [
    {
      name: 'WEB DEVELOPMENT',
      icon: 'assets/web.svg',
      dis: `Build a website that is as unique as your business with our expert web development services.Let's create an online presence that stands out.`,
    },
    {
      name: 'SOCIAL MEDIA MARKETING',
      icon: 'assets/meta.svg',
      dis: `Get your business in front of the right people with
      our targeted Meta Ads on Facebook and Instagram. 
      Let's reach your ideal customers Now.`,
    },
    {
      name: 'LINKEDIN ADS',
      icon: 'assets/linkedin.svg',
      dis: `Connect with top-notch clients and unlock 
      endless opportunities with our LinkedIn Ads. 
      Let's take your business to new heights!`,
    },
    {
      name: 'SEO SOLUTIONS',
      icon: 'assets/seo.svg',
      dis: `Boost your online visibility and attract more 
      customers with our customized SEO solutions. 
      Let's unlock your business's full potential!`,
    },
  ];
  ngOnInit(): void {}
}
