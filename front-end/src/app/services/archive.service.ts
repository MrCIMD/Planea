import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ArchiveService {
  private url: string;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.url = `${environment.api_planea}archive/`;
  }
}
