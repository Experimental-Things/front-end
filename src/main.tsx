import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GET_APP_ROUTES } from '@/routes/index.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(GET_APP_ROUTES())}>
      <App />
    </RouterProvider>
  </StrictMode>
);
