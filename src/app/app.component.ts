import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe cumque voluptates veritatis, sequi reprehenderit, earum excepturi reiciendis repudiandae beatae voluptatum ratione maiores ipsa praesentium, facilis aliquid neque eum deserunt?',
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe cumque voluptates veritatis, sequi reprehenderit, earum excepturi reiciendis repudiandae beatae voluptatum ratione maiores ipsa praesentium, facilis aliquid neque eum deserunt?',
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe cumque voluptates veritatis, sequi reprehenderit, earum excepturi reiciendis repudiandae beatae voluptatum ratione maiores ipsa praesentium, facilis aliquid neque eum deserunt?',
      created_at: new Date()
    },
  ]
}
