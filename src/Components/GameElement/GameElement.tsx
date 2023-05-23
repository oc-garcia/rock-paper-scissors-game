import GameChoice from "../GameChoice/GameChoice";
import { Phase1Container } from "./style";
import { useContext } from "react";
import { GameContext } from "../../hooks/classicGameContext";

import paperIcon from "./icon-paper.svg";
import rockIcon from "./icon-rock.svg";
import scissorIcon from "./icon-scissors.svg";

export default function GameElement() {
  const { phase, cards } = useContext(GameContext);

  if (phase.phase1) {
    return (
      <Phase1Container>
        <GameChoice icon={paperIcon} element={"paper"} borderColor={"hsl(230, 89%, 62%)"} />
        <GameChoice icon={scissorIcon} element={"scissor"} borderColor={"hsl(39, 89%, 49%)"} />
        <GameChoice icon={rockIcon} element={"rock"} borderColor={"hsl(349, 71%, 52%)"} />
      </Phase1Container>
    );
  }

  if (phase.phase2) {
    return (
      <>
        <h2>fase 2</h2>
        <p>{cards.player}</p>
        <p>{cards.pc}</p>
      </>
    );
  } else {
    return <h2>Loading</h2>;
  }
}
