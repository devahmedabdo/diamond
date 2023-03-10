import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { UserResponse, UsersResponse } from '../interfaces/user';
import { SponsersResponse } from '../interfaces/sponsers';
import { BlogsResponse } from '../interfaces/blogs';
import { Blog } from 'src/app/interfaces/blogs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.apiURL;
  constructor(private http: HttpClient) {}
  getAllUser(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.apiUrl + 'users.json');
  }
  getSponsers(): Observable<SponsersResponse> {
    return this.http.get<SponsersResponse>(this.apiUrl + 'sponsers.json');
  }

  getUserData(): Observable<UserResponse> {
    return this.http.get<UserResponse>('http://127.0.0.1:3001/writer');
  }
}
