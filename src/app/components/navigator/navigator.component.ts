import { Component, Input, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  home = faHome;
  routes: any = [
    {
      name: 'gold',
      rout: '/cart',
    },
    {
      name: 'any dawd',
      rout: '/cart',
    },
    {
      name: 'gold',
    },
  ];
  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
}
