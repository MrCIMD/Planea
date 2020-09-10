import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}panel/`;
  }

  public getAll(params: string = ''): Observable<Project[]> {
    return this.http
      .get<Project[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<Project> {
    return this.http
      .get<Project>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(project: Project): Observable<Project> {
    return this.http
      .post<Project>(this.url, project, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, project: Project): Observable<Project> {
    return this.http
      .put<Project>(`${this.url}${id}`, project, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<Project> {
    return this.http
      .delete<Project>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
