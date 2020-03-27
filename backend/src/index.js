// INICIALIZA O EXPRESS
const express = require('express');

// INICIALIZA O CORS
const cors = require('cors');

// IMPORTA O ARQUIVO ROUTES
const routes = require('./routes');

// INICIALIZA O APP
const app = express();

app.use(cors());

// DEFINE COMO LEITURA PADRÃO JSON
app.use(express.json());

// DEFINE A UTILIZAÇÃO DO ARQUIVO EXTERNO DE ROTAS
app.use(routes);

// PORTA UTILIADA PELO SERVIDOR
app.listen(3333);