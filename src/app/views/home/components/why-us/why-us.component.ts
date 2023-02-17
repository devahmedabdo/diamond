import { Component, OnInit } from '@angular/core';
import {
  faDiamond,
  faDiamondTurnRight,
  faGem,
  faGift,
  faPaintBrush,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss'],
})
export class WhyUsComponent implements OnInit {
  constructor() {}
  advantages: any[] = [
    {
      icon: 'assets/lordicons/gift.json',
      title: 'Gift Package',
      description: "We'll choose the perfect gift box for your present",
    },
    {
      icon: 'assets/lordicons/delivery.json',
      title: 'Diamond Selection',
      description: 'Our consultants will help you to choose the right size.',
    },
    {
      icon: 'assets/lordicons/design.json',
      title: 'Design Your Ring',
      description: 'Individual engraving to perpetuate the deepest feelings.',
    },
  ];
  ngOnInit(): void {}
}
