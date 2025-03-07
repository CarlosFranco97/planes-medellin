import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PlanesMedellin from './PlanesMedellin'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlanesMedellin />
  </StrictMode>,
)
