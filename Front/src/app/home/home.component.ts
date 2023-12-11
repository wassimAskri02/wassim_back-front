/**import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }
}

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.articles = data.articles; // Assuming the response contains an 'articles' array
    }, error => {
      console.error('Error fetching news:', error);
    });
  }
}
**/
import { Component, OnInit } from '@angular/core';
import { TechNewsService } from '../tech-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  techNews: any[] = [];

  constructor(private techNewsService: TechNewsService) { }

  ngOnInit() {
    this.techNewsService.getTechNews().subscribe(data => {
      this.techNews = data;
    });
  }
}

