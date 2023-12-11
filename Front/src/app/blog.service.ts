import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: any[] = []; // Replace with real data model

  constructor() { }

  getPosts() {
    return this.posts;
  }

  addPost(post: any) {
    this.posts.push(post);
  }

  // More methods as needed
}
