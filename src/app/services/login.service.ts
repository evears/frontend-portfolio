import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL = "/api";

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    return this.http.post(this.URL + "/login", user);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(this.URL + "usuario/ver/" + id);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken() {
    this.cookies.delete("token");
  }

  getUserLogged() {
    const token = this.getToken();
    return token;
  }
}
