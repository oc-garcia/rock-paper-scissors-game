import { IGameElements } from "../../types/IGameElement";
import { GameChoiceContainer } from "./styles";

export default function GameChoice({ icon, element, borderColor, onclick }: IGameElements) {
  return (
    <GameChoiceContainer onClick={() => onclick} border={`${borderColor}`}>
      <img src={icon} alt={element} />
    </GameChoiceContainer>
  );
}
