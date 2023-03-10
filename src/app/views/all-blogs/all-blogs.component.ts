import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blogs';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.scss'],
})
export class AllBlogsComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  blogs!: Blog[];
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
  recentBlogs!:Blog[]
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (blogs) => {
        this.blogs = blogs.blogs;
      },
      error: (error) => {
        console.log(error);
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
  }
}
