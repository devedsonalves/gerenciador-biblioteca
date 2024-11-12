import Fastify from 'fastify';
import { ProxyBiblioteca } from './proxy/ProxyBiblioteca';

const fastify = Fastify();
const biblioteca = new ProxyBiblioteca();

fastify.post('/autenticar', async (request, reply) => {
  const { senha } = request.body as { senha: string };
  const autenticado = biblioteca.autenticar(senha);
  reply.send({ message: autenticado ? 'Autenticado com sucesso!' : 'Senha incorreta.' });
});

fastify.post('/adicionar-livro', async (request, reply) => {
  const { titulo, autor } = request.body as { titulo: string, autor: string };
  biblioteca.adicionarLivro(titulo, autor);
  reply.send({ message: `Livro "${titulo}" adicionado com sucesso!` });
});

fastify.get('/listar-livros', async (request, reply) => {
  const livros = biblioteca.listarLivros();

  const livrosDto = livros.map((livro) => ({
    titulo: livro.titulo,
    autor: livro.autor,
    estado: livro.getEstado(),
  }));

  reply.send(livrosDto);
});

fastify.post('/emprestar-livro/:indice', async (request, reply) => {
  const { indice } = request.params as { indice: string };
  biblioteca.emprestarLivro(parseInt(indice));
  reply.send({ message: 'Livro emprestado com sucesso!' });
});

fastify.post('/devolver-livro/:indice', async (request, reply) => {
  const { indice } = request.params as { indice: string };
  biblioteca.devolverLivro(parseInt(indice));
  reply.send({ message: 'Livro devolvido com sucesso!' });
});

fastify.listen({ port: 3000 }, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
