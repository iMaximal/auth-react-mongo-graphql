import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  link: new HttpLink(),
  cache: new InMemoryCache(),
})

const Root = () => (
  <ApolloProvider client={client} >
    <div>
      Auth Starter
    </div>
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.querySelector('#root'))
