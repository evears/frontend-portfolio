import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persoURL = 'https://afternoon-river-76491.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.persoURL + `/api/persona/editar/${id}`, persona);
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.persoURL + '/api/persona/ver/1');
  }

  public save(perso: Persona): Observable<any> {
    return this.httpClient.post<any>(this.persoURL + '/api/persona/crear', perso);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.persoURL + `/api/persona/delete/${id}`);
  }
}
