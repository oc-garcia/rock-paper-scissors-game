import GameChoice from "../GameChoice/GameChoice";
import { Phase1Container, Phase2Container } from "./style";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../hooks/classicGameContext";

import paperIcon from "./icon-paper.svg";
import rockIcon from "./icon-rock.svg";
import scissorIcon from "./icon-scissors.svg";
import { IHand } from "../../types/types";
import GameChoiceShadow from "../GameChoiceShadow/GameChoiceShadow";

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

const cardsDefaultState = {
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

const winnerDefaultState = {
  player: false,
  pc: false,
};

export default function GameElement() {
  const { phase, cards, resetTable, handleScore } = useContext(GameContext);
  const [phase2Cards, setPhase2Cards] = useState(cardsDefaultState);
  const [outCome, setOutcome] = useState<string>();
  const [waiting, setWaiting] = useState<boolean>(true);
  const [winner, setWinner] = useState(winnerDefaultState);

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
      setOutcome("DRAW");
      handleWaiting(0);
    } else if (
      (phase2Cards.player.name === "paper" && phase2Cards.pc.name === "rock") ||
      (phase2Cards.player.name === "rock" && phase2Cards.pc.name === "scissor") ||
      (phase2Cards.player.name === "scissor" && phase2Cards.pc.name === "paper")
    ) {
      setOutcome("YOU WIN");
      handleWaiting(1);
    } else if (
      (phase2Cards.pc.name === "paper" && phase2Cards.player.name === "rock") ||
      (phase2Cards.pc.name === "rock" && phase2Cards.player.name === "scissor") ||
      (phase2Cards.pc.name === "scissor" && phase2Cards.player.name === "paper")
    ) {
      setOutcome("YOU LOSE");
      handleWaiting(-1);
    }
  };

  const handleWaiting = (prmt: number) => {
    setTimeout(() => {
      setWaiting(false);
      handleScore(prmt);
      if (prmt === -1) {
        setWinner({ ...winner, pc: true });
      } else if (prmt === 1) {
        setWinner({ ...winner, player: true });
      }
    }, 2000);
  };

  useEffect(() => {
    handleTable2();
  }, [cards]);

  useEffect(() => {
    handleOutcome();
  }, [phase2Cards]);

  useEffect(() => {}, [waiting]);

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
              winner={winner.player}
            />
            <p>YOU PICKED</p>
          </div>
          {waiting && (
            <div>
              <GameChoiceShadow />
              <p>THE HOUSE PICKED</p>
            </div>
          )}
          {!waiting && (
            <div>
              <GameChoice
                winner={winner.pc}
                icon={phase2Cards.pc.icon}
                element={phase2Cards.pc.name}
                borderColor={phase2Cards.pc.color}
              />
              <p>THE HOUSE PICKED</p>
            </div>
          )}
        </div>
        {!waiting ? (
          <div>
            <h2>{outCome}</h2>
            <button
              onClick={() => {
                setWaiting(true);
                setPhase2Cards(cardsDefaultState);
                resetTable();
                setWinner(winnerDefaultState);
              }}>
              PLAY AGAIN
            </button>
          </div>
        ) : (
          <span>
            <h2>CONCEALED</h2>
            <button>CONCEALED</button>
          </span>
        )}
      </Phase2Container>
    );
  } else {
    return <h2>Loading</h2>;
  }
}
