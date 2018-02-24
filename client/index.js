import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import App from './containers/App/App'

const link = new HttpLink({
  uri: '/graphql',
  // Additional fetch options like `credentials` or `headers`
  credentials: 'same-origin',
})

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
  link,
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
