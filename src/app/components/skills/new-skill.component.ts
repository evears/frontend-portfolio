import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre: string = '';
  porcentaje!: number;

  constructor(private habservice: HabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Habilidad(this.nombre, this.porcentaje);
    this.habservice.save(expe).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falla al agregar la nueva habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
