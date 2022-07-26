import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {

  person: Persona = null;

  constructor(private persoservice: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persoservice.detail(id).subscribe(
      data => {
        this.person = data;
      }, err => {
        alert("Error al modificar el perfil");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persoservice.update(id, this.person).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

}
