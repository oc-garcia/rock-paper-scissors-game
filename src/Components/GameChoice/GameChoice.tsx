import { useContext } from "react";
import { IGameElements } from "../../types/IGameElement";
import { GameChoiceContainer } from "./styles";
import { GameContext } from "../../hooks/classicGameContext";

export default function GameChoice({ icon, element, borderColor }: IGameElements) {
  const { handlePhase1 } = useContext(GameContext);
  return (
    <GameChoiceContainer onClick={() => handlePhase1(element)} border={`${borderColor}`}>
      <img src={icon} alt={element} />
    </GameChoiceContainer>
  );
}
