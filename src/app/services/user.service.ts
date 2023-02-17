import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { UsersResponse } from '../interfaces/user';
import { SponsersResponse } from '../interfaces/sponsers';
import { BlogsResponse } from '../interfaces/blogs';

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
  getBlogs(): Observable<BlogsResponse> {
    return this.http.get<BlogsResponse>(this.apiUrl + 'blogs.json');
  }
}
