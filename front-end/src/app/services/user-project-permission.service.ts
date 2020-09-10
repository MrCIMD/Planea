import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { UserProjectPermission } from '../models/user-project-permission.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserProjectPermissionService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}user-panel-permission/`;
  }

  public getAll(params: string = ''): Observable<UserProjectPermission[]> {
    return this.http
      .get<UserProjectPermission[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<UserProjectPermission> {
    return this.http
      .get<UserProjectPermission>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(
    userProjectPermission: UserProjectPermission
  ): Observable<UserProjectPermission> {
    return this.http
      .post<UserProjectPermission>(this.url, userProjectPermission, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(
    id: number,
    userProjectPermission: UserProjectPermission
  ): Observable<UserProjectPermission> {
    return this.http
      .put<UserProjectPermission>(`${this.url}${id}`, userProjectPermission, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<UserProjectPermission> {
    return this.http
      .delete<UserProjectPermission>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
