import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persoURL = environment.URL + 'api/persona/';

  constructor(private httpClient: HttpClient) { }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.persoURL + `editar/${id}`, persona);
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.persoURL + `ver/${id}`);
  }

  public save(perso: Persona): Observable<any> {
    return this.httpClient.post<any>(this.persoURL + 'crear', perso);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.persoURL + `delete/${id}`);
  }
}
