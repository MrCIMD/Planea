import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Comment } from './../models/comment.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}comment/`;
  }

  public getAll(params: string = ''): Observable<Comment[]> {
    return this.http
      .get<Comment[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<Comment> {
    return this.http
      .get<Comment>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(commetn: Comment): Observable<Comment> {
    return this.http
      .post<Comment>(this.url, commetn, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, commetn: Comment): Observable<Comment> {
    return this.http
      .put<Comment>(`${this.url}${id}`, commetn, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<Comment> {
    return this.http
      .delete<Comment>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
