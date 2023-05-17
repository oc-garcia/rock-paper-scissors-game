import GameChoice from "../GameChoice/GameChoice";
import { GameElementContainer } from "./style";

export default function GameElement() {
  return (
    <GameElementContainer>
      <GameChoice />
      <GameChoice />
      <GameChoice />
    </GameElementContainer>
  );
}
