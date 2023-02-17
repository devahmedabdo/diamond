import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();
  constructor() {}
  links: any[] = [
    {
      icon: faFacebook,
      link: '',
      color: '#0078bd',
    },
    {
      icon: faTwitter,
      link: '',
      color: '#92d1ff',
    },
    {
      icon: faInstagram,
      link: '',
      color: '#ff6dae',
    },
  ];
  ngOnInit(): void {}
}
