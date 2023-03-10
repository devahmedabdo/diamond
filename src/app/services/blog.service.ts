import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogsResponse, Blog, BlogComment } from '../interfaces/blogs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUrl = environment.apiURL;
  constructor(private http: HttpClient) {}
  getBlogs(): Observable<BlogsResponse> {
    return this.http.get<BlogsResponse>(this.apiUrl + 'blogs.json');
  }
  getOneBlog(): Observable<Blog> {
    return this.http.get<Blog>(this.apiUrl + 'single-blog.json');
  }
  
  numberOfComment(arr: BlogComment[]) {
    let number = 0;
    if (arr.length > 0) {
      arr.forEach((comment) => {
        number += this.numberOfComment(comment.replies);
      });
      number += arr.length;
    }
    return number;
  }
}
