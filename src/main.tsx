import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyle } from "./styles/global.ts";
import { GameProvider } from "./hooks/classicGameContext.tsx";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);
