import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routes.tsx";
import { GlobalStyle } from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRouter />
  </React.StrictMode>
);
