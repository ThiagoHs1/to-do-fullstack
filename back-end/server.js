const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./graphql/schema');
const sequelize = require('./config/database');
const Todo = require('./models/Todo'); // Importando o modelo

const app = express();

// Configurar o CORS
app.use(cors());

// Testando a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao banco de dados com sucesso.');

    // Sincronizando o modelo com o banco de dados
    return sequelize.sync(); // Este comando cria a tabela 'Todos' se ela não existir
  })
  .then(() => console.log('Tabelas sincronizadas com sucesso.'))
  .catch(err => console.error('Não foi possível conectar ao banco de dados:', err));

// Configuração do GraphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Habilita a interface do GraphiQL
}));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
