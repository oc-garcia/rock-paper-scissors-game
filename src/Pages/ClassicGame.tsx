import Footer from "../Components/Footer/Footer";
import GameElement from "../Components/GameElement/GameElement";
import ScoreBoard from "../Components/ScoreBoard/ScoreBoard";

type Props = {};

export default function ClassicGame({}: Props) {
  return (
    <main>
      <ScoreBoard />
      <GameElement />
      <Footer />
    </main>
  );
}
