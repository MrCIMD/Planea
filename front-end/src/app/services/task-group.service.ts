import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { TaskGroup } from '../models/task-group.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskGroupService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}task-group/`;
  }

  public getAll(params: string = ''): Observable<TaskGroup[]> {
    return this.http
      .get<TaskGroup[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<TaskGroup> {
    return this.http
      .get<TaskGroup>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(taskGroup: TaskGroup): Observable<TaskGroup> {
    return this.http
      .post<TaskGroup>(this.url, taskGroup, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, taskGroup: TaskGroup): Observable<TaskGroup> {
    return this.http
      .put<TaskGroup>(`${this.url}${id}`, taskGroup, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<TaskGroup> {
    return this.http
      .delete<TaskGroup>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
