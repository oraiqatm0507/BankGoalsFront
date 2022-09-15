import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, gql } from '@apollo/client';
import { WebSocketLink } from 'apollo-link-ws';
import { Provider } from 'react-redux';
import store from './Backend/store';

const httpLink = new HttpLink({
  uri: `http://localhost:8080/graphql`,
});



const client = new ApolloClient({
  uri: `http://localhost:8080/graphql`,
  cache: new InMemoryCache(),
});


// const client = ...


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>



);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
