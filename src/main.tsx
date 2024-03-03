import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { CurrentUserProvider } from './hooks/CurrentUser.tsx'
import { MapperProvider } from './hooks/Mapper.tsx'
import './index.css'
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "./apollo/client.ts"

loadDevMessages();
loadErrorMessages();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MapperProvider>
        <ApolloProvider client={apolloClient}>
          <CurrentUserProvider>
            <App />
          </CurrentUserProvider>
        </ApolloProvider>
      </MapperProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
