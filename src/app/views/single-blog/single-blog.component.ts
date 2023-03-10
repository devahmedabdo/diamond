import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Blog, BlogComment, BlogsResponse } from 'src/app/interfaces/blogs';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { ProductsService } from 'src/app/services/products.service';
import { BlogService } from 'src/app/services/blog.service';
import { Product, ProductResponse } from 'src/app/interfaces/product';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss'],
})
export class SingleBlogComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private userService: UserService,
    // private blog: ProductsService,
    private fb: FormBuilder // private productServices: ProductsService
  ) {}
  blog!: Blog;
  user!: User;
  recentBlogs!: Blog[];
  categories: any[] = [
    { name: 'accessories', number: 32 },
    { name: 'Diamonds', number: 32 },
    { name: 'Earrings', number: 32 },
    { name: 'Gifts', number: 32 },
    { name: 'Necklaces & Pendants', number: 32 },
    { name: 'Pearles', number: 32 },
    { name: 'Rings', number: 32 },
    { name: 'Wedding', number: 32 },
    { name: 'Uncategorized', number: 32 },
  ];
  routes: any[] = [
    {
      name: 'blogs',
      rout: '/blogs',
    },
    {
      name: '',
    },
  ];
  addReplyForm = this.fb.group({
    comment: ['', [Validators.required]],
  });
  invalidComment: boolean = false;
  addComment(comment: any) {
    if (this.addReplyForm.invalid) {
      this.invalidComment = true;
    } else {
      console.log(comment);
    }
  }
  numberOfComments!: number;
  ngOnInit(): void {
    this.blogService.getOneBlog().subscribe({
      next: (blog) => {
        this.blog = blog;
        // localStorage.setItem('asd', JSON.stringify(blog.comments));
        // console.log();
        this.numberOfComments = this.blogService.numberOfComment(blog.comments);
        // console.log(.entries());
      },
    });
    this.blogService.getBlogs().subscribe({
      next: (recentBlogs) => {
        this.recentBlogs = recentBlogs.blogs;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.userService.getUserData().subscribe({
      next: (data) => {
        this.user = data.profile;
        // this.userNews = data.news;
        // console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
