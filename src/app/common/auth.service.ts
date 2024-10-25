import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ConfigService {
  private url = environment.url + '/hotel/v1';

  constructor(private http: HttpClient) {
    super();
  }

  logIn(uniqueId: string, password: string): Observable<any> {
    debugger;
    const logInData = {
      identifier: uniqueId,
      password: password,
    };
    return this.http.post(this.url + '/login', logInData, httpOptions);
  }

  public static isLoggedIn(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    let currentUrl = window.location.href;
    try {
      return this.tokenNotExpired();
    } catch (error) {
      let token = localStorage.getItem('jwt');
      if (token) {
        alert('Session Expired, please login again.');
      }
      window.location.reload();
      return false;
    }
  }

  public static tokenNotExpired(): boolean {
    if (typeof window === 'undefined') {
      return false;
    }

    let jwtHelper = new JwtHelperService();
    const token: string | null = localStorage.getItem('jwt');
    return token != null && !jwtHelper.isTokenExpired(token);
  }
}
