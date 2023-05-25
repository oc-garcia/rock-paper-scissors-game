import React, { Dispatch, SetStateAction, createContext, useState } from "react";

export interface IPhase {
  phase1: boolean;
  phase2: boolean;
}

export interface Icards {
  player: string;
  pc: string;
}

export interface IGameContext {
  phase: IPhase;
  setPhase?: Dispatch<SetStateAction<IPhase>>;
  handlePhase1: (prmt: string) => void;
  resetTable: () => void;
  cards: Icards;
  setCards?: (cards: Icards) => void;
  elementPicker?: (prmt: string) => void;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  handleScore: (prmt: number) => void;
}

const defaultState = {
  phase: {
    phase1: true,
    phase2: false,
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
    setPhase({ phase1: false, phase2: true });
  };

  const resetTable = () => {
    setPhase({ phase1: true, phase2: false });
  };

  const handleScore = (prmt: number) => {
    setScore(prmt + score);
  };

  return (
    <GameContext.Provider value={{ phase, handlePhase1, resetTable, cards, score, setScore, handleScore }}>
      {children}
    </GameContext.Provider>
  );
};
