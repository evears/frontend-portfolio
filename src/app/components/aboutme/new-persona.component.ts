import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-new-persona',
  templateUrl: './new-persona.component.html',
  styleUrls: ['./new-persona.component.css']
})
export class NewPersonaComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  titulo: string = '';
  infopersonal: string = '';
  urlfotoperfil: string = '';

  constructor(private persoservice: PersonaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Persona(this.nombre, this.apellido, this.titulo, this.infopersonal, this.urlfotoperfil);
    this.persoservice.save(expe).subscribe(
      data => {
        alert("Persona añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falla al agregar la nueva persona");
        this.router.navigate(['']);
      }
    )
  }

}
