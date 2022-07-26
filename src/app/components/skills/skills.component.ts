import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  hab: Habilidad[] = [];

  constructor(private habiserv: HabilidadService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHabilidad(): void {
    this.habiserv.lista().subscribe(data => { this.hab = data; })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.habiserv.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }


}
