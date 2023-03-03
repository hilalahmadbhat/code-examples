import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  blogPosts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.blogPosts.push(new Post(1,"Blog 1","Blog description 1"))
    this.blogPosts.push(new Post(2,"Blog 2","Blog description 2"))
    this.blogPosts.push(new Post(3,"Blog 3","Blog description 3"))
    this.blogPosts.push(new Post(4,"Blog 4","Blog description 4"))
    this.blogPosts.push(new Post(5,"Blog 5","Blog description 5"))
  }

}
