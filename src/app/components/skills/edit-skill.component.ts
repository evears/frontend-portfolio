import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  hab: Habilidad = null;

  constructor(private habservice: HabilidadService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habservice.detail(id).subscribe(
      data => {
        this.hab = data;
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habservice.update(id, this.hab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }


}
