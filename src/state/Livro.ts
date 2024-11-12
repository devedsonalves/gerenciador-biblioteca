import { EstadoLivro, Disponivel } from "./EstadoLivro";

export class Livro {
  public titulo: string;
  public autor: string;
  private estado: EstadoLivro;

  constructor(titulo: string, autor: string) {
    this.titulo = titulo;
    this.autor = autor;
    this.estado = new Disponivel();
  }

  public getEstado(): string {
    return this.estado.nome;
  }

  public emprestar(): void {
    this.estado = this.estado.emprestar();

  }

  public devolver(): void {
    this.estado = this.estado.devolver();
  }
}
