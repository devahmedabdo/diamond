import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElementServices {
  constructor() {}
  changeActive(toggle: boolean[]) {
    console.log(toggle);
    toggle.forEach((e: boolean) => {
      e = !e;
    });
    console.log(toggle);
  }
}
