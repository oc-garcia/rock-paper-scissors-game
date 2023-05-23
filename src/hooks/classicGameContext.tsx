import React, { Dispatch, SetStateAction, createContext, useState } from "react";

export interface IPhase {
  phase1: boolean;
  phase2: boolean;
  phase3: boolean;
}

export interface Icards {
  player: string;
  pc: string;
}

export interface IGameContext {
  phase: IPhase;
  setPhase?: Dispatch<SetStateAction<IPhase>>;
  handlePhase1: (prmt: string) => void;
  handlePhase2: (prmt: string) => void;
  handlePhase3: (prmt: string) => void;
  cards: Icards;
  setCards?: (cards: Icards) => void;
  elementPicker?: (prmt: string) => void;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

const defaultState = {
  phase: {
    phase1: true,
    phase2: false,
    phase3: false,
  },
  cards: {
    player: "",
    pc: "",
  },
  score: 0,
} as IGameContext;

export const GameContext = createContext(defaultState);

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

  const [score, setScore] = useState<number>(0);

  const elementPicker = (prmt: string) => {
    const options = ["paper", "scissor", "rock"];

    const randomIndex = Math.floor(Math.random() * 3);
    setCards({
      player: prmt,
      pc: options[randomIndex],
    });
  };

  const handlePhase1 = (prmt: string) => {
    elementPicker(prmt);
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
    <GameContext.Provider value={{ phase, handlePhase1, handlePhase2, handlePhase3, cards, score, setScore }}>
      {children}
    </GameContext.Provider>
  );
};
