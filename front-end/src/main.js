// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importando o router
import { apolloClient } from './apollo'; // Importação do Apollo Client
import { provideApolloClient } from '@vue/apollo-composable'; // Importação do Apollo composable
import './assets/main.css';


const app = createApp(App);

// Fornece o Apollo Client para os componentes Vue
provideApolloClient(apolloClient);

app.use(router); // Registrando o router na aplicação
app.mount('#app');
