import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './Background.css'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <h1 className='heading'>"Nature’s Calendar"</h1>
    <App />
  </StrictMode>,
)
