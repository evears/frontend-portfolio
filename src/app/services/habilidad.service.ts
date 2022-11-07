import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  habURL = 'https://afternoon-river-76491.herokuapp.com/api/habilidad/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + 'vertodos');
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habURL + `ver/${id}`);
  }

  public save(hab: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habURL + 'nueva', hab);
  }

  public update(id: number, hab: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habURL + `editar/${id}`, hab);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `delete/${id}`);
  }
}
