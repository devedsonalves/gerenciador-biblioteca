import { GerenciadorBiblioteca } from "../sigleton/GerenciadorBiblioteca";
import { Livro } from "../state/Livro";

export class ProxyBiblioteca {
  private gerenciador: GerenciadorBiblioteca;
  private autenticado: boolean;

  constructor() {
    this.gerenciador = GerenciadorBiblioteca.getInstancia();
    this.autenticado = false;
  }

  public autenticar(senha: string): boolean {
    if (senha === "admin") {
      this.autenticado = true;
      return true;
    }

    return false;
  }

  public adicionarLivro(titulo: string, autor: string): void {
    if (this.autenticado) {
      this.gerenciador.adicionarLivro(titulo, autor);
      return;
    }

    throw new Error("Sem permissão!")
  }
  public listarLivros(): Livro[] {
    if (this.autenticado) {
      const livros = this.gerenciador.listarLivros();
      return livros;
    }

    throw new Error("Sem permissão!")
  }

  public emprestarLivro(indice: number): void {
    if (this.autenticado) {
      this.gerenciador.emprestarLivro(indice);
      return;
    }

    throw new Error("Sem permissão!")
  }

  public devolverLivro(indice: number): void {
    if (this.autenticado) {
      this.gerenciador.devolverLivro(indice);
      return;
    }

    throw new Error("Sem permissão!")
  }
}
