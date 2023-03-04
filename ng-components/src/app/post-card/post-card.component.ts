import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Post } from '../post';
import { TruncatePipe } from '../truncate.pipe';
@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  
  @Input() post: Post;
  fullDescription:string;
  constructor(private truncatePipe: TruncatePipe) { 
    console.log("*****constructor**********")
  }

  ngOnInit(): void {
    this.fullDescription = this.post.description
    this.post.description = this.truncatePipe.transform(this.post.description,50)
  }

  showFullDescription(){
    this.post.description = this.fullDescription
  }

  

}
