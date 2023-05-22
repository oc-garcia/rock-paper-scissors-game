import React, { createContext, useState } from "react";

interface IPhase {
  phase1: boolean;
  phase2: boolean;
  phase3: boolean;
  handlePhase1?: (value: string) => void;
}

interface Icards {
  player: string;
  pc: string;
}

export const GameContext = createContext({} as GameContext);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [phase, setPhase] = useState<IPhase>({
    phase1: true,
    phase2: false,
    phase3: false,
  });

  const [cards, setCards] = useState<Icards>({
    player: "",
    pc: "",
  });

  const elementPicker = (prmt: string) => {
    console.log(prmt);
    const options = ["paper", "scissor", "rock"];

    const randomIndex = Math.floor(Math.random() * 3);
    if (options[randomIndex] !== prmt) {
      setCards({
        player: prmt,
        pc: options[randomIndex],
      });
      console.log(cards);
    } else {
      elementPicker(prmt);
    }
  };

  const handlePhase1 = (prmt: string) => {
    setPhase({ ...phase, phase1: false, phase2: true });
    elementPicker(prmt);
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
