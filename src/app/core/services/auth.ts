import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  private http = inject(HttpClient);


  login(data: any) {
    return this.http.post('/api/auth/login', data);
  }
}
