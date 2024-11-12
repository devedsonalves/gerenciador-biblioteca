import { Livro } from "../state/Livro";

export class GerenciadorBiblioteca {
  private static instancia: GerenciadorBiblioteca;
  private livros: Livro[] = [];

  private constructor() { }

  public static getInstancia(): GerenciadorBiblioteca {
    if (!GerenciadorBiblioteca.instancia) {
      GerenciadorBiblioteca.instancia = new GerenciadorBiblioteca();
    }
    return GerenciadorBiblioteca.instancia;
  }

  public adicionarLivro(titulo: string, autor: string): void {
    const livro = new Livro(titulo, autor);
    this.livros.push(livro);
  }

  public listarLivros(): Livro[] {
    return this.livros;
  }

  public emprestarLivro(indice: number): void {
    if (this.livros[indice]) {
      this.livros[indice].emprestar();
      return;
    }

    throw new Error("Livro não encontrado");
  }

  public devolverLivro(indice: number): void {
    if (this.livros[indice]) {
      this.livros[indice].devolver();
      return;
    }

    throw new Error("Livro não encontrado");
  }
}
