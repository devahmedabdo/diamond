import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singl-product',
  templateUrl: './singl-product.component.html',
  styleUrls: ['./singl-product.component.scss'],
})
export class SinglProductComponent implements OnInit {
  constructor() {}
  productInfo: any;
  changeSrc(info: any) {
    // let bigSrc = info.image1;
    // let smallSrc = info as HTMLImageElement;
    let img = info.parentElement?.parentElement
      ?.children[0] as HTMLImageElement;
    // smallSrc.parentElement?.parentElement?.children[0].src
    if (img) {
      img.src = info.src;
    }
    // this.productInfo.image1 = info.src;
    // console.log(smallSrc.parentElement?.parentElement?.children[0].src);
  }

  async ngOnInit() {
    let info = await JSON.parse(window.localStorage.getItem('singlProduct')!);
    console.log(info);
    if (info) {
      this.productInfo = info;
    }
  }
}
