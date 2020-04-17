const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Métodos HTTP
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros
 * Query: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *      http://localhost:3333/users?page=2&name=Mateus&idade=23
 *      const params = request.query
 * Route: Parâmetros utilizados para identificar recursos
 *      http://localhost:3333/users/:id   |||   http://localhost:3333/users/1
 *      const params = request.params
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 *      utiliza POST, envia em json
 */


module.exports = app;