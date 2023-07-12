import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'sweetalert2/src/sweetalert2.scss'
import './assets/styles/app.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'

import Loader from './components/loader/Loader.tsx'
import Layout from './layout.tsx'
import { APP } from './config/app.ts'

/***
 * Import bootstrap css
 */
/***
 * Configure react-toastify styles
 */
/***
 * Configure sweetalert2 styles
 */
/***
 * Own styles
 */
/***
 * Components
 */
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  APP.isDevelopment ? (
    <React.StrictMode>
      <HelmetProvider>
        <RecoilRoot>
          <BrowserRouter>
            <React.Suspense fallback={<Loader />}>
              <Layout />

              <ToastContainer
                autoClose={3000}
                pauseOnHover
                position="top-left"
              />
            </React.Suspense>
          </BrowserRouter>
        </RecoilRoot>
      </HelmetProvider>
    </React.StrictMode>
  ) : (
    <HelmetProvider>
      <RecoilRoot>
        <BrowserRouter>
          <React.Suspense fallback={<Loader />}>
            <Layout />

            <ToastContainer autoClose={3000} pauseOnHover position="top-left" />
          </React.Suspense>
        </BrowserRouter>
      </RecoilRoot>
    </HelmetProvider>
  )
);
