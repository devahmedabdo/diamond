import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {}
}
