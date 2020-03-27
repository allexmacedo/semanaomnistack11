/*
* ROTAS E RECURSOS
*
* METODOS 
*
* GET: Buscar informações do backend
* POST: criar uma infromação no backend
* PUT:  Alterar uma informação no backend
DELETE: Deletar uma informação no backend


TIPOS DE PARÂMETROS
Query params: Parametros nomeados enviados a rota após ? (Filtros, paginacao)
Route params: Parametros utilizados para identificar recursos
Requeste body: Corpo da requisicao, utilizado para criar ou alterar recursos

BANDOS DE DADOS
SQL: MySQL, SQLite, PostgreSQL, Oracle, MsSQL
NoSQL: MongoDB, Firebase

DRIVER DO BANCO

Driver: SELECT * FROM users
Query Builder: table('users').select('*').where()
*/ 

const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;