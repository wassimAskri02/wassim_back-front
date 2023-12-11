import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsUrl = 'http://localhost:3000/news'; // URL to your Node.js backend

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(this.newsUrl);
  }
}
