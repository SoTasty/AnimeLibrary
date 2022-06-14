import React from 'react';
import ReactDOM from 'react-dom';
import thunk  from 'redux-thunk'
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache() 
})

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <ApolloProvider client={client}>
  <Provider store={store}>
  <App />
  </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
