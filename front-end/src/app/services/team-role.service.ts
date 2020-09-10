import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { TeamRole } from '../models/team-role.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeamRoleService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}team-role/`;
  }

  public getAll(params: string = ''): Observable<TeamRole[]> {
    return this.http
      .get<TeamRole[]>(`${this.url}${params}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public getById(id: number): Observable<TeamRole> {
    return this.http
      .get<TeamRole>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public save(teamRole: TeamRole): Observable<TeamRole> {
    return this.http
      .post<TeamRole>(this.url, teamRole, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public update(id: number, teamRole: TeamRole): Observable<TeamRole> {
    return this.http
      .put<TeamRole>(`${this.url}${id}`, teamRole, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.data));
  }

  public delete(id: number): Observable<TeamRole> {
    return this.http
      .delete<TeamRole>(`${this.url}${id}`, {
        headers: this.auth.getHeaders(),
      })
      .pipe(map((response: any) => response.deleted));
  }
}
