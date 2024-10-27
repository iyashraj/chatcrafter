import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.styles.css'
import {GoogleOAuthProvider} from '@react-oauth/google'
import {googleAuth} from '../config.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={googleAuth.web.client_id}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
