

const {adicionarLivro, removeLivro, buscarLivros} = require('./gestaolivros')

test('Adiciona livros', () => {
    const id = '1'
    const nome = 'Cinquenta tons de cinza'
    const autor = 'Marcelo Queiroz'
    const ano = 2020
    const saida = `Livro adicionado com sucesso: id: ${id}`
    expect(adicionarLivro(id, nome, autor, ano)).toEqual(saida)
})

test( 'remove livros', () => {
    const id = 2
    const saida = 'livro apagado'
    expect(removeLivro(id)).toEqual(saida)
})

test('Buscar livros', () => {
    const nome = 'Alibaba'
    const saida = { id: 2, title: 'Alibaba', author: 'Xalalin Xalalai', year: 1720 }
    expect(buscarLivros(nome)).toEqual(saida)
})