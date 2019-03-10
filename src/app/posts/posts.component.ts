import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() title:string;
  @Input() content:string;
  @Input() loveIts:number = 0;
  @Input() dontLoveIts:number = 0;
  @Input() created_at:Date;

  constructor() { }

  ngOnInit() {
  }

  voteLoveIt() {
    this.loveIts++;
  }

  voteDontLoveIt() {
    this.dontLoveIts++;
  }

}
