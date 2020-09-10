import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { TaskStatu } from '../models/task-statu.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskStatuService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}task-statu/`;
  }

  public getAll(params: string = ''): Observable<TaskStatu[]> {
    return this.http
      .get<TaskStatu[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<TaskStatu> {
    return this.http
      .get<TaskStatu>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(taskStatu: TaskStatu): Observable<TaskStatu> {
    return this.http
      .post<TaskStatu>(this.url, taskStatu, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, taskStatu: TaskStatu): Observable<TaskStatu> {
    return this.http
      .put<TaskStatu>(`${this.url}${id}`, taskStatu, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<TaskStatu> {
    return this.http
      .delete<TaskStatu>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
