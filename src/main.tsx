import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStyle } from './components/GlobalStyle/index.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.tsx'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { AuthProvider } from './app/context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
