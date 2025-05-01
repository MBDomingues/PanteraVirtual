// Função para gerar o código aleatório
function gerarCodigoAleatorio() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    for (let i = 0; i < 11; i++) { // Código com 8 caracteres
        const indice = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[indice];
    }
    return codigo;
}

// Exibir o código na página
document.addEventListener("DOMContentLoaded", () => {
    const elementoCodigo = document.getElementById('codigoPremiacao');
    elementoCodigo.innerText = gerarCodigoAleatorio();
});
