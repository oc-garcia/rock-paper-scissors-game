import GameChoice from "../GameChoice/GameChoice";
import { Phase1Container } from "./style";
import { useContext } from "react";
import { GameContext } from "../../hooks/classicGameContext";

import paperIcon from "./icon-paper.svg";
import rockIcon from "./icon-rock.svg";
import scissorIcon from "./icon-scissors.svg";

export default function GameElement() {
  const { phase, handlePhase1 } = useContext(GameContext);

  if (phase.phase1) {
    return (
      <Phase1Container>
        <GameChoice
          onclick={() => handlePhase1("paper")}
          icon={paperIcon}
          element={"paper"}
          borderColor={"hsl(230, 89%, 62%)"}
        />
        <GameChoice
          onclick={() => handlePhase1("scissor")}
          icon={scissorIcon}
          element={"scissor"}
          borderColor={"hsl(39, 89%, 49%)"}
        />
        <GameChoice
          onclick={() => handlePhase1("rock")}
          icon={rockIcon}
          element={"rock"}
          borderColor={"hsl(349, 71%, 52%)"}
        />
      </Phase1Container>
    );
  }
}
