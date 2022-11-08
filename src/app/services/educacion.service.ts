import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL = 'https://api-portfolio-argprog.herokuapp.com/api/educacion/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + 'vertodos');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `ver/${id}`);
  }

  public save(edu: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + 'crear', edu);
  }

  public update(id: number, edu: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `editar/${id}`, edu);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}
