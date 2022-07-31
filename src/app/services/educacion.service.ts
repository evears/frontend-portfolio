import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  eduURL = 'https://afternoon-river-76491.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.eduURL + '/api/educacion/vertodos');
  }

  public detail(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.eduURL + `/api/educacion/ver/${id}`);
  }

  public save(edu: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.eduURL + '/api/educacion/crear', edu);
  }

  public update(id: number, edu: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.eduURL + `/api/educacion/editar/${id}`, edu);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.eduURL + `/api/educacion/delete/${id}`);
  }
}
