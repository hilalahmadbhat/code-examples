import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages:number;
  pages:number[];
  @Output() eventPageNumberClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.numberOfPages)
  }
  pageNumberClicked(pagenumber:number){
    this.eventPageNumberClicked.emit(pagenumber)
  }

}
