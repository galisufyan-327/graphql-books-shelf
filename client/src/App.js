import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//component
import BookList from './components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphiql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ali's Reading List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
