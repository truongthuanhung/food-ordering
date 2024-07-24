import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogItem } from './models/BlogItem';
import { BlogService } from '../../services/blogService/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit, OnDestroy {
  blogList: BlogItem[] = [];
  constructor(private readonly blogService: BlogService) {}
  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs) => (this.blogList = blogs));
  }
  ngOnDestroy(): void {
    this.blogService
      .getBlogs()
      .subscribe((blogs) => (this.blogList = blogs))
      .unsubscribe();
  }
}
