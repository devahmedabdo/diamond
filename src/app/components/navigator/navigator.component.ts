import { Component, Input, OnInit } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  @Input() routes!: any[];
  @Input() title?: string;
  home = faHome;

  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
}
