export class Proyecto {
  idproye?: number;
  nombre: string;
  descripcion: string;
  url: string;
  anio: number;

  constructor(nombre: string, descripcion: string, url: string, anio: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.url = url;
    this.anio = anio;
  }
}
