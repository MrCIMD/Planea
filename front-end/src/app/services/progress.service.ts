import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Progress } from '../models/progress,model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}progress/`;
  }

  public getAll(params: string = ''): Observable<Progress[]> {
    return this.http
      .get<Progress[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<Progress> {
    return this.http
      .get<Progress>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(progress: Progress): Observable<Progress> {
    return this.http
      .post<Progress>(this.url, progress, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, progress: Progress): Observable<Progress> {
    return this.http
      .put<Progress>(`${this.url}${id}`, progress, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<Progress> {
    return this.http
      .delete<Progress>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
