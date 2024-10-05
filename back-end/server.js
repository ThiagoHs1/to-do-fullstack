const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema'); // Iremos criar isso em breve
const sequelize = require('./config/database');

const app = express();

// Testando a conexão com o banco de dados
sequelize.authenticate()
    .then(() => console.log('Conectado ao banco de dados com sucesso.'))
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
