import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ElementServices {
  constructor(private http: HttpClient) {}

  // changeActive(toggle: boolean[]) {
  //   console.log(toggle);
  //   toggle.forEach((e: boolean) => {
  //     e = !e;
  //   });
  //   console.log(toggle);
  // }
}
