export class Experiencia {
  idExpe?: number;
  puesto: string;
  descripcionexpe: string;
  empresa: string;
  urlfotoempresa: string;
  aniodesde: number;
  aniohasta: number;

  constructor(puesto: string, descripcionexpe: string, empresa: string, urlfotoempresa: string,
    aniodesde: number, aniohasta: number) {
    this.puesto = puesto;
    this.descripcionexpe = descripcionexpe;
    this.empresa = empresa;
    this.urlfotoempresa = urlfotoempresa;
    this.aniodesde = aniodesde;
    this.aniohasta = aniohasta;
  }
}
