import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  post = {
    title: '',
    content: '',
    tags: '' // This could be an array if you want to handle multiple tags
  };

  constructor() { }

  onSubmit() {
    console.log('Post data:', this.post);
    // Here you would typically send the post data to a server
  }
}
