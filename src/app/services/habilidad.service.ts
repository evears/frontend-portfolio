import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  habURL = 'https://afternoon-river-76491.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + '/api/habilidad/vertodos');
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habURL + `/api/habilidad/ver/${id}`);
  }

  public save(hab: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habURL + '/api/habilidad/crear', hab);
  }

  public update(id: number, hab: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habURL + `/api/habilidad/editar/${id}`, hab);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `/api/habilidad/delete/${id}`);
  }
}
