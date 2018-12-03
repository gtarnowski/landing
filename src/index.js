import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { ApolloLink, concat } from 'apollo-link'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './styles/main.css';


const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: window.localStorage.getItem('token') || null,
    },
  });

  return forward(operation);
});
const endpoint = 'https://api.lead.equipment/graphql';
const client = new ApolloClient({
  link: concat(authMiddleware, new HttpLink({ uri: endpoint })),
  cache: new InMemoryCache(),
});
window.apollo = client;


ReactDOM.render((
  <ApolloProvider client={client}>
    <Router>
      <App/>
    </Router>
  </ApolloProvider>
), document.getElementById('root'));
serviceWorker.unregister();
