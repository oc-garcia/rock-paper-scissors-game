import GameChoice from "../GameChoice/GameChoice";
import { Phase1Container, Phase2Container } from "./style";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../hooks/classicGameContext";

import paperIcon from "./icon-paper.svg";
import rockIcon from "./icon-rock.svg";
import scissorIcon from "./icon-scissors.svg";

export interface IHand {
  name: string;
  icon: string;
  color: string;
}

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

const defaultState = {
  player: {
    name: "",
    icon: "",
    color: "",
  } as IHand,
  pc: {
    name: "",
    icon: "",
    color: "",
  } as IHand,
};

export default function GameElement() {
  const { phase, cards, resetTable, handleScore } = useContext(GameContext);
  const [phase2Cards, setPhase2Cards] = useState(defaultState);
  const [outCome, setOutCome] = useState<string>();
  const [waiting, setWaiting] = useState<boolean>(false);

  const handleTable2 = () => {
    const playerSetup = tableSetup.filter((key) => key.name === cards.player);
    const pcSetup = tableSetup.filter((key) => key.name === cards.pc);
    if (phase.phase2) {
      setPhase2Cards({
        player: {
          name: playerSetup[0].name,
          icon: playerSetup[0].icon,
          color: playerSetup[0].color,
        },
        pc: {
          name: pcSetup[0].name,
          icon: pcSetup[0].icon,
          color: pcSetup[0].color,
        },
      });
    }
  };

  const handleOutcome = () => {
    if (phase2Cards.player.name === phase2Cards.pc.name) {
      setOutCome("DRAW");
    } else if (
      (phase2Cards.player.name === "paper" && phase2Cards.pc.name === "rock") ||
      (phase2Cards.player.name === "rock" && phase2Cards.pc.name === "scissor") ||
      (phase2Cards.player.name === "scissor" && phase2Cards.pc.name === "paper")
    ) {
      setOutCome("YOU WIN");
      if (phase.phase2) {
        handleWaiting(1, true);
      }
    } else if (
      (phase2Cards.pc.name === "paper" && phase2Cards.player.name === "rock") ||
      (phase2Cards.pc.name === "rock" && phase2Cards.player.name === "scissor") ||
      (phase2Cards.pc.name === "scissor" && phase2Cards.player.name === "paper")
    ) {
      setOutCome("YOU LOSE");
      if (phase.phase2) {
        handleWaiting(-1, true);
      }
    }
  };

  const handleWaiting = (prmt: number, prmt2: boolean) => {
    setTimeout(() => {
      if (prmt) {
        handleScore(prmt);
      }
      if (prmt2) {
        setWaiting(prmt2);
      }
    }, 2000);
  };

  useEffect(() => {
    handleTable2();
  }, [cards]);

  useEffect(() => {
    handleOutcome();
  }, [phase2Cards]);

  useEffect(() => {
    console.log(waiting);
  }, [waiting]);

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
        <div>
          <div>
            <GameChoice
              icon={phase2Cards.player.icon}
              element={phase2Cards.player.name}
              borderColor={phase2Cards.player.color}
            />
            <p>YOU PICKED</p>
          </div>
          {waiting && (
            <div>
              <GameChoice icon={phase2Cards.pc.icon} element={phase2Cards.pc.name} borderColor={phase2Cards.pc.color} />
              <p>THE HOUSE PICKED</p>
            </div>
          )}
        </div>
        {waiting && (
          <div>
            <h2>{outCome}</h2>
            <button
              onClick={() => {
                resetTable();
                setPhase2Cards(defaultState);
                setWaiting(false);
              }}>
              PLAY AGAIN
            </button>
          </div>
        )}
      </Phase2Container>
    );
  } else {
    return <h2>Loading</h2>;
  }
}
