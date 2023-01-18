import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private subject = new Subject<any>();
  setItems() {
    this.subject.next(null);
  }
  getItems(): Observable<any> {
    return this.subject.asObservable();
  }
}
