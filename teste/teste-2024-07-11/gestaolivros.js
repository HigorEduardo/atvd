
var biblioteca = [{id: 2, title: 'Alibaba', author: 'Xalalin Xalalai', year: 1720}];

function adicionarLivro(id, title, author, year) {
  livro = {'id': id, 'title': title, 'author': author, 'year': year };
  biblioteca.push(livro);
  return `Livro adicionado com sucesso: id: ${id}`;
}

// console.log(adicionarLivro('aa','blabla', 2020))

function removeLivro(id) {
    for (let index = 0; index < biblioteca.length; index++) {
        if(id == biblioteca[index].id){
            biblioteca.splice[index, 1]
            return 'livro apagado'
        }
    }
}

console.log(removeLivro(2))

function buscarLivros(nome){
    const buscar = biblioteca.find((element) =>  element.title == nome)
    return buscar
}

console.log(buscarLivros('Alibaba'))

module.exports = { adicionarLivro, removeLivro, buscarLivros };
