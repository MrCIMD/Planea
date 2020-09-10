import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { TaskArchive } from '../models/task-archive.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskArchiveService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}task-archive/`;
  }

  public getAll(params: string = ''): Observable<TaskArchive[]> {
    return this.http
      .get<TaskArchive[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<TaskArchive> {
    return this.http
      .get<TaskArchive>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(taskArchive: TaskArchive): Observable<TaskArchive> {
    return this.http
      .post<TaskArchive>(this.url, taskArchive, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, taskArchive: TaskArchive): Observable<TaskArchive> {
    return this.http
      .put<TaskArchive>(`${this.url}${id}`, taskArchive, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<TaskArchive> {
    return this.http
      .delete<TaskArchive>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
