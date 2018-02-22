import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import App from './containers/App/App'

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  link: new HttpLink(),
  cache: new InMemoryCache(),
})

const Root = () => (
  <ApolloProvider client={client} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.querySelector('#root'))
