const inputNome = document.getElementById('nome');
const inputValor = document.getElementById('valor');
const inputCategoria = document.getElementById('categoria');
const form = document.getElementById('form');
const mensagemErro = document.getElementById('mensagemErro');
const listaProdutos = document.getElementById('listaProdutos');

function exibirProduto(nome, valor, categoria) {
    const li = document.createElement('li');

    let precoFormatado = parseFloat(valor).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    li.textContent = `${nome} - ${precoFormatado} (${categoria})`;

    if (categoria === 'Tecnologia') {
        li.style.fontWeight = 'bold';
    } else if (categoria === 'Alimentos') {
        li.style.backgroundColor = 'yellow';
    }

    listaProdutos.appendChild(li);
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let nome = inputNome.value.trim();
    let valor = inputValor.value.trim();
    let categoria = inputCategoria.value.trim();

    if (nome === "" || valor === "" || valor == 0 || categoria === "") {
        mensagemErro.textContent = 'Preencha os campos vazios';
        mensagemErro.style.color = "#ff0000";
        return;
    } else {
        mensagemErro.textContent = '';
        exibirProduto(nome, valor, categoria);
    }

    form.reset();
});
