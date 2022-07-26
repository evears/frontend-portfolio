import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  nombre: string = '';
  descripcion: string = '';
  url: string = '';
  anio!: number;

  constructor(private proyeservice: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Proyecto(this.nombre, this.descripcion, this.url, this.anio);
    this.proyeservice.save(expe).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falla al agregar el nuevo proyecto");
        this.router.navigate(['']);
      }
    )
  }


}
