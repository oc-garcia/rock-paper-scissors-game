import GameChoice from "../GameChoice/GameChoice";
import { Phase1Container, Phase2Container } from "./style";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../hooks/classicGameContext";

import paperIcon from "./icon-paper.svg";
import rockIcon from "./icon-rock.svg";
import scissorIcon from "./icon-scissors.svg";

const tableSetup = [
  {
    name: "paper",
    icon: paperIcon,
    color: "hsl(230, 89%, 62%)",
  },
  {
    name: "rock",
    icon: rockIcon,
    color: "hsl(349, 71%, 52%)",
  },
  {
    name: "scissor",
    icon: scissorIcon,
    color: "hsl(39, 89%, 49%)",
  },
];

export default function GameElement() {
  const { phase, cards } = useContext(GameContext);
  const [phase2Cards, setPhase2Cards] = useState({
    player: {
      name: "",
      icon: "",
      color: "",
    },
    pc: {
      name: "",
      icon: "",
      color: "",
    },
  });

  const handleTable2 = () => {
    const playerSetup = tableSetup.filter((key) => key.name === cards.player);
    setPhase2Cards({
      player: {
        name: playerSetup.name,
        icon: playerSetup.icon,
        color: playerSetup.color,
      },
      pc: {
        name: "",
        icon: "",
        color: "",
      },
    });
    console.log(playerSetup);
  };

  useEffect(() => {
    handleTable2();
  }, [cards]);

  if (phase.phase1) {
    return (
      <Phase1Container>
        {tableSetup.map((element, index) => (
          <GameChoice key={index} icon={element.icon} element={element.name} borderColor={element.color} />
        ))}
      </Phase1Container>
    );
  }

  if (phase.phase2) {
    return (
      <Phase2Container>
        <GameChoice
          icon={phase2Cards.player.icon}
          element={phase2Cards.player.name}
          borderColor={phase2Cards.player.color}
        />
        <GameChoice icon={phase2Cards.pc.icon} element={phase2Cards.pc.name} borderColor={phase2Cards.pc.color} />
      </Phase2Container>
    );
  } else {
    return <h2>Loading</h2>;
  }
}
