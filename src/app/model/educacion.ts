export class Educacion {
  idedu?: number;
  instituto: string;
  titulo: string;
  urllogoedu: string;
  aniodesde: number;
  aniohasta: number;

  constructor(instituto: string, titulo: string, urllogoedu: string, aniodesde: number, aniohasta: number) {
    this.instituto = instituto;
    this.titulo = titulo;
    this.urllogoedu = urllogoedu;
    this.aniodesde = aniodesde;
    this.aniohasta = aniohasta;
  }

}
