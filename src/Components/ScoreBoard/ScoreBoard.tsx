import logoClassic from "./logo.svg";
import { HeaderContainer } from "./styles";

type Props = {
  score: number;
};

export default function ScoreBoard({ score }: Props) {
  return (
    <HeaderContainer>
      <img src={logoClassic} alt="logo" />
      <div>
        <h1>Score</h1>
        <p>{score}</p>
      </div>
    </HeaderContainer>
  );
}
