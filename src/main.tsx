import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from './components/GlobalStyle/index.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <RouterProvider router={router} />
  </StrictMode>,
)
