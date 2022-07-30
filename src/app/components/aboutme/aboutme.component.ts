import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  persona: Persona = new Persona("", "", "", "", "");

  constructor(private persoservice: PersonaService, private tokenService: TokenService,
    private activatedRouter: ActivatedRoute) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persoservice.detail(id).subscribe(data => { this.persona = data; })
  }

}
