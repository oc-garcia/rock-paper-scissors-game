import { Dispatch, SetStateAction } from "react";

export interface IGameElements {
  icon: string;
  element: string;
  borderColor: string;
  winner?: boolean | string;
}

export interface IHand {
  name: string;
  icon: string;
  color: string;
}

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
