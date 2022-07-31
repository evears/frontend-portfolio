import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyeURL = 'https://afternoon-river-76491.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.proyeURL + '/api/proyecto/vertodos');
  }

  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.proyeURL + `/api/proyecto/ver/${id}`);
  }

  public save(proye: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.proyeURL + '/api/proyecto/crear', proye);
  }

  public update(id: number, proye: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.proyeURL + `/api/proyecto/editar/${id}`, proye);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyeURL + `/api/proyecto/delete/${id}`);
  }
}
