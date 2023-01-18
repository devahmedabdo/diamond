import { Component, OnInit } from '@angular/core';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.scss'],
})
export class ToTopComponent implements OnInit {
  constructor() {}
  toTop = faUpLong;
  documentHeight: number = 0;
  scrollHeight: number = 0;
  divisionConst: number = 0;
  dashOffset: number = 310;
  screenHieght: number = 0;
  toTopF() {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    // console.log('im in');
    this.screenHieght = window.innerHeight;
    window.onscroll = () => {
      this.documentHeight = document.documentElement.scrollHeight;
      this.divisionConst = this.documentHeight / 310;
      this.scrollHeight = document.documentElement.scrollTop;
      let position =
        this.documentHeight - this.screenHieght - this.scrollHeight;
      this.dashOffset = position / this.divisionConst;

      // console.log('screen ' + this.screenHieght);
      // console.log('document ' + this.documentHeight);
      // // console.log('position ' + window.scrollY);
      // console.log('position ' + position);
      // console.log('const ' + this.dashOffset);

      // console.log('screen ' + this.screenHieght);
      // console.log('document ' + this.documentHeight);
      // console.log('position ' + position);
      // console.log('const ' + this.dashOffset);
    };
  }
}