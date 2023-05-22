import Footer from "../Components/Footer/Footer";
import GameElement from "../Components/GameElement/GameElement";
import ScoreBoard from "../Components/ScoreBoard/ScoreBoard";

export default function ClassicGame() {
  return (
    <main>
      <ScoreBoard />
      <GameElement />
      <Footer />
    </main>
  );
}
