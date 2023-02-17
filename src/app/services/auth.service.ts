import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let apiUrl = 'http://127.0.0.1:3001/';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  loging(data: any) {
    return this.http.post(apiUrl + 'login', data);
  }
  signup(data: any) {
    return this.http.post(apiUrl + 'signup', data);
  }
  logout() {
    return this.http.delete(apiUrl + 'logout');
  }
}
