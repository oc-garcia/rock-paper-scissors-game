import { IGameElements } from "../../types/IGameElement";
import { GameChoiceContainer } from "./styles";

export default function GameChoice({ icon, element, borderColor }: IGameElements) {
  return (
    <GameChoiceContainer border={`${borderColor}`}>
      <img src={icon} alt={element} />
    </GameChoiceContainer>
  );
}
