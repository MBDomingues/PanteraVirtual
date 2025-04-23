// Perguntas do quiz
const perguntas = [
    {
        pergunta: "Qual o ano de fundação da FURIA?",
        resposta: "2017"
    },
    {
        pergunta: "Quem é o capitão do time de CS da FURIA?",
        resposta: "KSCERATO"
    },
    {
        pergunta: "Quantos títulos internacionais a FURIA já conquistou?",
        resposta: "3"
    }
];

let pontuacao = 0; // Pontuação do usuário
let perguntaAtual = 0; // Índice da pergunta atual

// Seletores
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Função para exibir mensagens no chat
function adicionarMensagem(tipo, mensagem) {
    const novaMensagem = document.createElement('div');
    novaMensagem.classList.add(tipo); // 'user' ou 'bot'
    novaMensagem.textContent = mensagem;
    chatBox.appendChild(novaMensagem);
    chatBox.scrollTop = chatBox.scrollHeight; // Rolagem automática
}

// Função para iniciar o quiz
function iniciarQuiz() {
    adicionarMensagem('bot', "Bem-vindo ao Quiz da FURIA! Vamos começar?");
    setTimeout(() => {
        adicionarMensagem('bot', perguntas[perguntaAtual].pergunta);
    }, 1000);
}

// Função para verificar a resposta do usuário
function verificarResposta(resposta) {
    if (resposta.toLowerCase() === perguntas[perguntaAtual].resposta.toLowerCase()) {
        adicionarMensagem('bot', "✔️ Correto! Você ganhou 10 pontos.");
        pontuacao += 10;
    } else {
        adicionarMensagem('bot', `❌ Errado! A resposta certa era: ${perguntas[perguntaAtual].resposta}`);
    }

    perguntaAtual++;

    // Verifica se há mais perguntas
    if (perguntaAtual < perguntas.length) {
        setTimeout(() => {
            adicionarMensagem('bot', perguntas[perguntaAtual].pergunta);
        }, 1000);
    } else {
        setTimeout(() => {
            adicionarMensagem('bot', `Parabéns! Você terminou o quiz com ${pontuacao} pontos!`);
        }, 1000);
    }
}

// Event Listener para o botão de enviar
sendButton.addEventListener('click', () => {
    const resposta = userInput.value.trim();
    if (resposta) {
        adicionarMensagem('user', resposta);
        verificarResposta(resposta);
        userInput.value = ""; // Limpa o campo de input
    }
});

// Inicia o quiz ao carregar o script
iniciarQuiz();