import { useContext } from "react";
import logoClassic from "./logo.svg";
import { HeaderContainer } from "./styles";
import { GameContext } from "../../hooks/classicGameContext";

export default function ScoreBoard() {
  const { score } = useContext(GameContext);
  return (
    <HeaderContainer>
      <img src={logoClassic} alt="logo" />
      <div>
        <h1>SCORE</h1>
        <p>{score}</p>
      </div>
    </HeaderContainer>
  );
}
