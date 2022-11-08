import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

  habURL = environment.URL + 'api/habilidad/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.habURL + 'vertodos');
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.habURL + `ver/${id}`);
  }

  public save(hab: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.habURL + 'crear', hab);
  }

  public update(id: number, hab: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.habURL + `editar/${id}`, hab);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.habURL + `delete/${id}`);
  }
}
