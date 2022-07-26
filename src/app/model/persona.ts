export class Persona {
  IDpersona?: number;
  nombre: String;
  apellido: String;
  titulo: String;
  infopersonal: String;
  urlfotoperfil: String;

  constructor(nombre: String, apellido: String, titulo: String, infopersonal: String, urlfotoperfil: String) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.infopersonal = infopersonal,
      this.urlfotoperfil = urlfotoperfil;
  }
}
