import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { SmallTask } from '../models/small-task.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SmallTaskService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}small-task/`;
  }

  public getAll(params: string = ''): Observable<SmallTask[]> {
    return this.http
      .get<SmallTask[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<SmallTask> {
    return this.http
      .get<SmallTask>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(smallTask: SmallTask): Observable<SmallTask> {
    return this.http
      .post<SmallTask>(this.url, smallTask, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, smallTask: SmallTask): Observable<SmallTask> {
    return this.http
      .put<SmallTask>(`${this.url}${id}`, smallTask, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<SmallTask> {
    return this.http
      .delete<SmallTask>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
