export interface EstadoLivro {
  nome: string;
  emprestar(): EstadoLivro;
  devolver(): EstadoLivro;
}

export class Disponivel implements EstadoLivro {
  nome = 'Disponível';
  emprestar() {
    return new Emprestado();
  }
  devolver() {
    console.log("O livro já está disponível.");
    return this;
  }
}

export class Emprestado implements EstadoLivro {
  nome = 'Emprestado';
  emprestar() {
    console.log("O livro já está emprestado.");
    return this;
  }
  devolver() {
    return new Disponivel();
  }
}
