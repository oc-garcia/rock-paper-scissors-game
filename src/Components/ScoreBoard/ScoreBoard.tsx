import logoClassic from "./logo.svg";
import { HeaderContainer } from "./styles";

export default function ScoreBoard() {
  return (
    <HeaderContainer>
      <img src={logoClassic} alt="logo" />
      <div>
        <h1>Score</h1>
        <p>12</p>
      </div>
    </HeaderContainer>
  );
}
