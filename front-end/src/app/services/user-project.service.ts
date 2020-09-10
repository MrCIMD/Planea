import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { UserProject } from '../models/user-project.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserProjectService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}user-panel/`;
  }

  public getAll(params: string = ''): Observable<UserProject[]> {
    return this.http
      .get<UserProject[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<UserProject> {
    return this.http
      .get<UserProject>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(userProject: UserProject): Observable<UserProject> {
    return this.http
      .post<UserProject>(this.url, userProject, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, userProject: UserProject): Observable<UserProject> {
    return this.http
      .put<UserProject>(`${this.url}${id}`, userProject, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<UserProject> {
    return this.http
      .delete<UserProject>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
