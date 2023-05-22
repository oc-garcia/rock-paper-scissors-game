import GameChoice from "../GameChoice/GameChoice";
import { GameElementContainer } from "./style";

import paperIcon from "./icon-paper.svg";
import rockIcon from "./icon-rock.svg";
import scissorIcon from "./icon-scissors.svg";

export default function GameElement() {
  return (
    <GameElementContainer>
      <GameChoice icon={paperIcon} element={"paper"} borderColor={"hsl(230, 89%, 62%)"} />
      <GameChoice icon={scissorIcon} element={"scissor"} borderColor={"hsl(39, 89%, 49%)"} />
      <GameChoice icon={rockIcon} element={"rock"} borderColor={"hsl(349, 71%, 52%)"} />
    </GameElementContainer>
  );
}
