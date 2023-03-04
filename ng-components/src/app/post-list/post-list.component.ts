import { Component, OnInit, QueryList,  ViewChildren } from '@angular/core';
import { Post } from '../post';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  blogPosts: Post[][];
  currentPageNumber:number=0
  @ViewChildren("postcards") blogPostCards:QueryList<PostCardComponent>

  constructor() { }

  ngOnInit(): void {
    // this.blogPosts.push(new Post(1,"Blog 1","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))
    // this.blogPosts.push(new Post(2,"Blog 2","Blog description 2"))
    // this.blogPosts.push(new Post(3,"Blog 3","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))
    // this.blogPosts.push(new Post(4,"Blog 4","Blog description 4"))
    // this.blogPosts.push(new Post(5,"Blog 5","Blog description 5"))
    this.blogPosts = [
      [
        {id: 1,title: "Post title 1",description: "Post description 1 Post description 1 Post description 1 Post description 1 Post description 1"},
        {id: 2,title: "Post title 2",description: "Post description 2 Post description 2 Post description 2 Post description 2 Post description 2 Post description 2 "},
        {id: 3,title: "Post title 3",description: "Post description 3"},
        {id: 4,title: "Post title 4",description: "Post description 4"},
        {id: 5,title: "Post title 5",description: "Post description 5"},
      ],
      [
        {id: 6,title: "Post title 6",description: "Post description 6"},
        {id: 7,title: "Post title 7",description: "Post description 7"},
        {id: 8,title: "Post title 8",description: "Post description 8"},
        {id: 9,title: "Post title 9",description: "Post description 9"},
        {id: 10,title: "Post title 10",description: "Post description 10"},
      ],
      [
        {id: 11,title: "Post title 11",description: "Post description 11"},
        {id: 12,title: "Post title 12",description: "Post description 12"},
        {id: 13,title: "Post title 13",description: "Post description 13"},
        {id: 14,title: "Post title 14",description: "Post description 14"},
        {id: 15,title: "Post title 15",description: "Post description 15"},
      ],
      [
        {id: 16,title: "Post title 16",description: "Post description 16"},
        {id: 17,title: "Post title 17",description: "Post description 17"},
        {id: 18,title: "Post title 18",description: "Post description 18"},
        {id: 19,title: "Post title 19",description: "Post description 19"},
        {id: 20,title: "Post title 20",description: "Post description 20"},
      ],
      [
        {id: 21,title: "Post title 21",description: "Post description 21"},
        {id: 22,title: "Post title 22",description: "Post description 22"},
        {id: 23,title: "Post title 23",description: "Post description 23"},
        {id: 24,title: "Post title 24",description: "Post description 24"},
        {id: 25,title: "Post title 25",description: "Post description 25"},
      ]
    ]
  }

  updatePageNumber(event:any){
    this.currentPageNumber = event
  }

  expandAllPosts(){
    this.blogPostCards.forEach( e => e.showFullDescription())
  }
}
