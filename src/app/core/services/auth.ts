import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private http = inject(HttpClient);
  private tokenKey = 'concierge_token';

  login(data: any) {
    return this.http.post('auth/login', data);
  }

  // Save token after login
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve token (used by authInterceptor)
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove token on logout
  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
