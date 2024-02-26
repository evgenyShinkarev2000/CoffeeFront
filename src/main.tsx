import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { appoloClient } from 'src/apollo/client.ts'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { MapperProvider } from './hooks/Mapper.tsx'

loadDevMessages();
loadErrorMessages();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={appoloClient}>
      <BrowserRouter>
        <MapperProvider>
          <App />
        </MapperProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
