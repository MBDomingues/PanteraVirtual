const express = require('express'); // Importa o Express
const app = express(); // Cria a instância do servidor Express

// Define o endpoint de teste
app.get('/teste', (req, res) => {
    res.json({ message: "Servidor funcionando corretamente!" });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
