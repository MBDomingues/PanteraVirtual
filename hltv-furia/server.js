const express = require('express');
const HLTV = require('hltv');

const app = express();
const PORT = 3000;

app.get('/proximo-jogo', async (req, res) => {
    try {
        console.log("Iniciando busca de partidas no HLTV...");
        const matches = await HLTV.default.getMatches(); // Retorna todas as partidas
        console.log("Matches retornados:", matches);

        // Retorna todos os dados sem filtro
        res.json(matches);
    } catch (error) {
        console.error("Erro ao buscar dados no HLTV:", error);
        res.status(500).json({ error: 'Erro ao buscar os dados' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


