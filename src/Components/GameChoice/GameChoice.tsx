import { useContext, useEffect } from "react";
import { IGameElements } from "../../types/types";
import { GameChoiceContainer } from "./styles";
import { GameContext } from "../../hooks/classicGameContext";

export default function GameChoice({ icon, element, borderColor }: IGameElements) {
  const { phase, handlePhase1 } = useContext(GameContext);
  useEffect(() => {}, [phase]);
  return (
    <GameChoiceContainer
      onClick={() => {
        if (phase.phase1) {
          handlePhase1(element);
        }
      }}
      border={`${borderColor}`}>
      <img src={icon} alt={element} />
    </GameChoiceContainer>
  );
}
