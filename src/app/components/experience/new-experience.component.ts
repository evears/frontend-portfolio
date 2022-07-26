import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/services/experiencia.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {

  puesto: string = '';
  descripcionexpe: string = '';
  empresa: string = '';
  urlfotoempresa: string = '';
  aniodesde!: number;
  aniohasta!: number;

  constructor(private expeservice: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.puesto, this.descripcionexpe, this.empresa, this.urlfotoempresa,
      this.aniodesde, this.aniohasta);
    this.expeservice.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falla al agregar la nueva experiencia");
        this.router.navigate(['']);
      }
    )
  }


}
