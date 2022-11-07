import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  instituto: string = '';
  titulo: string = '';
  urllogoedu: string = '';
  aniodesde!: number;
  aniohasta!: number;

  constructor(private eduservice: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.instituto, this.titulo, this.urllogoedu, this.aniodesde, this.aniohasta);
    this.eduservice.save(edu).subscribe(
      data => {
        alert("Educacion añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falla al agregar la nueva educacion");
        this.router.navigate(['']);
      }
    )
  }

}
