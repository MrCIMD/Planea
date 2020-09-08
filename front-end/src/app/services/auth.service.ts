import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.api_planea}account/`;
  }

  public login(user: User): Observable<Token> {
    return this.http.post<Token>(`${this.url}login`, user);
  }

  public register(user: User): Observable<Token> {
    return this.http.post<Token>(`${this.url}register`, user);
  }

  public logout(): Observable<any> {
    return this.http.post<any>(
      `${this.url}logout`,
      {},
      { headers: this.getHeaders() }
    );
  }

  public saveToken(token: Token): void {
    const date = new Date(token.expiration);
    console.log(date.getDate());
    localStorage.setItem('auth', JSON.stringify(token));
  }

  public destroyToken(): void {
    localStorage.removeItem('auth');
  }

  public getToken(): Token {
    const token = JSON.parse(localStorage.getItem('auth'));
    if (token != null) {
      return token;
    }
    return null;
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.getToken().token}`,
    });
  }
}
