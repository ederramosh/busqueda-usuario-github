import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Summary } from './Summary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Summary />
  </StrictMode>,
)
