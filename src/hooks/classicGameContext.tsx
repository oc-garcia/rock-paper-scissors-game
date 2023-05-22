import React, { createContext, useState } from "react";

interface IPhase {
  phase1: boolean;
  phase2: boolean;
  phase3: boolean;
  handlePhase1?: React.Dispatch<React.SetStateAction<string>>;
}

export const GameContext = createContext({});

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [phase, setPhase] = useState<IPhase>({
    phase1: true,
    phase2: false,
    phase3: false,
  });

  const handlePhase1 = () => {
    setPhase({ ...phase, phase1: false, phase2: true });
  };

  const handlePhase2 = () => {
    setPhase({ ...phase, phase2: false, phase3: true });
  };

  const handlePhase3 = () => {
    setPhase({
      phase1: true,
      phase2: false,
      phase3: false,
    });
  };

  return (
    <GameContext.Provider value={{ phase, handlePhase1, handlePhase2, handlePhase3 }}>{children}</GameContext.Provider>
  );
};
