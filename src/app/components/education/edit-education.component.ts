import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit {

  edu: Educacion = null;

  constructor(private eduservice: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduservice.detail(id).subscribe(
      data => {
        this.edu = data;
      }, err => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.eduservice.update(id, this.edu).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    )
  }

}
