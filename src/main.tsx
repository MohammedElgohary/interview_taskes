/***
 * Import bootstrap css
 */
import "bootstrap/dist/css/bootstrap.min.css";
/***
 * Configure react-toastify styles
 */
import "react-toastify/dist/ReactToastify.css";
/***
 * Configure sweetalert2 styles
 */
import "sweetalert2/src/sweetalert2.scss";
/***
 * Own styles
 */
import "./assets/styles/app.scss";

import Layout from "./layout.tsx";

import { BrowserRouter } from "react-router-dom";
/***
 * Components
 */
import Loader from "./components/loader/Loader.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Layout />

          <ToastContainer autoClose={3000} pauseOnHover position="top-left" />
        </React.Suspense>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
