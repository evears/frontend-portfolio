import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  persoURL = 'http://localhost:8080/api/persona/';

  constructor(private httpClient: HttpClient) { }

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.persoURL + `editar/${id}`, persona);
  }

  public getById(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.persoURL + 'ver/1');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.persoURL + `ver/${id}`);
  }
}
