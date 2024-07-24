import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blogService/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css',
})
export class BlogDetailComponent implements OnInit {
  title = '';
  image = '';
  content = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe();
    const { slug } = this.route.snapshot.params;
    this.blogService.getBlog(slug).subscribe((blog) => {
      if (blog) {
        this.title = blog.title;
        this.image = blog.image;
        this.content = blog.content;
        console.log(blog);
      }
    });
  }
}
