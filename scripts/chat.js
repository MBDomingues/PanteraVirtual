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
let tempoRestante = 15; // Tempo inicial em segundos
let intervaloTimer; // Controla o intervalo do timer


// Seletores
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function digitarMensagem(tipo, mensagem, delay = 30) {
    const novaMensagem = document.createElement('div');
    novaMensagem.classList.add(tipo);
    chatBox.appendChild(novaMensagem);

    let i = 0;
    const intervalo = setInterval(() => {
        if (i < mensagem.length) {
            novaMensagem.textContent += mensagem[i];
            i++;
        } else {
            clearInterval(intervalo);
            chatBox.scrollTop = chatBox.scrollHeight; 
        }
    }, delay);
}

function adicionarMensagem(tipo, mensagem) {
    const novaMensagem = document.createElement('div');
    novaMensagem.classList.add(tipo);
    novaMensagem.textContent = mensagem;
    chatBox.appendChild(novaMensagem);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Função para inicar o time das respostas
// function iniciarTimer() {
//     tempoRestante = 30; // Reinicia o tempo para cada pergunta
//     const timerElement = document.createElement('div');
//     timerElement.id = 'timer';
//     timerElement.textContent = `Tempo restante: ${tempoRestante}s`;
//     chatBox.appendChild(timerElement);

//     intervaloTimer = setInterval(() => {
//         tempoRestante--;
//         timerElement.textContent = `Tempo restante: ${tempoRestante}s`;

//         if (tempoRestante <= 0) {
//             clearInterval(intervaloTimer);
//             chatBox.removeChild(timerElement);
//             adicionarMensagem('bot', "⏰ Tempo esgotado! Próxima pergunta...");
//             perguntaAtual++;
//             if (perguntaAtual < perguntas.length) {
//                 setTimeout(() => {
//                     digitarMensagem('bot', perguntas[perguntaAtual].pergunta);
//                     iniciarTimer(); // Reinicia o timer para a próxima pergunta
//                 }, 1000);
//             } else {
//                 adicionarMensagem('bot', `Quiz concluído! Sua pontuação final é: ${pontuacao}`);
//             }
//         }
//     }, 1000); // Atualiza o timer a cada segundo
// }

// Função para iniciar o quiz
// function iniciarQuiz() {
//     digitarMensagem('bot', "Bem-vindo ao Quiz da FURIA! Vamos começar?");
//     setTimeout(() => {
//         digitarMensagem('bot', perguntas[perguntaAtual].pergunta);
//         iniciarTimer();
//     }, 2000);
// }


// Função para verificar a resposta do usuário
// function verificarResposta(resposta) {
//     if (resposta.toLowerCase() === perguntas[perguntaAtual].resposta.toLowerCase()) {
//         digitarMensagem('bot', "✔️ Correto! Você ganhou 10 pontos.");
//         pontuacao += 10;
//     } else {
//         digitarMensagem('bot', `❌ Errado! A resposta certa era: ${perguntas[perguntaAtual].resposta}`);
//     }
//     perguntaAtual++;
//     // Verifica se há mais perguntas
//     if (perguntaAtual < perguntas.length) {
//         setTimeout(() => {
//             digitarMensagem('bot', perguntas[perguntaAtual].pergunta);
//         }, 1000);
//     } else {
//         setTimeout(() => {
//             digitarMensagem('bot', `Parabéns! Você terminou o quiz com ${pontuacao} pontos!`);
//             iniciarTimer();
//         }, 1000);
//     }
// }

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