import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClassicGame from "./Pages/ClassicGame";
import LizardSpock from "./Pages/LizardSpock";
import Home from "./Pages/Home";
import { GameProvider } from "./hooks/classicGameContext";

function AppRouter() {
  return (
    <BrowserRouter>
      <GameProvider>
        <Routes>
          <Route path="/teste" element={<Home />} />
          <Route path="/" element={<ClassicGame />} />
          <Route path="/LizardSpock" element={<LizardSpock />} />
        </Routes>
      </GameProvider>
    </BrowserRouter>
  );
}

export default AppRouter;
