import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'diamond';
  ngOnInit() {
    window.addEventListener('scroll', () => {
      let divClass = document.querySelectorAll(
        '.dReveal,.lReveal,.uReveal,.rReveal'
      );
      let imgClass = document.querySelectorAll('.imgReveal');
      [divClass, imgClass].forEach((arr: NodeListOf<Element>) => {
        let removeClass = (ele: Element, addedClass: string) => {
          if (ele.getBoundingClientRect().top < 600) {
            ele.classList.add(addedClass);
          } else {
            ele.classList.remove(addedClass);
          }
        };
        if (arr == divClass) {
          arr.forEach((hiddenEle: Element) => {
            removeClass(hiddenEle, 'reveal');
          });
        } else if (arr == imgClass) {
          arr.forEach((hiddenEle: Element) => {
            removeClass(hiddenEle, 'imgUnReveal');
          });
        }
      });
    });
  }
}
