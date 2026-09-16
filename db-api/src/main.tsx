import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ListCharacters } from './components/ListCharacters'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListCharacters/>
  </StrictMode>,
)
