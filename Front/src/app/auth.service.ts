import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, { username, password });
  }
}
