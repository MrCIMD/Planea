import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { Group } from '../models/group.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}group/`;
  }

  public getAll(params: string = ''): Observable<Group[]> {
    return this.http
      .get<Group[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<Group> {
    return this.http
      .get<Group>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(group: Group): Observable<Group> {
    return this.http
      .post<Group>(this.url, group, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, group: Group): Observable<Group> {
    return this.http
      .put<Group>(`${this.url}${id}`, group, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<Group> {
    return this.http
      .delete<Group>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
