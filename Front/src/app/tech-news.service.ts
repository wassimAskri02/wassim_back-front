import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechNewsService {
  private apiUrl = 'http://localhost:3000/api/tech-news';

  constructor(private http: HttpClient) { }

  getTechNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
