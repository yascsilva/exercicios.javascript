// Função para modificar o conteúdo da página
function modificarConteudo() {
    // Seleciona o elemento <h1> e modifica seu texto
    document.getElementById('titulo').textContent = 'Olá, pessoas!';

    // Seleciona o elemento <p> e modifica seu texto
    document.getElementById('paragrafo').textContent = 'Isso é um teste.';
}

// Chama a função modificarConteudo quando a página é carregada
window.onload = modificarConteudo;