import Footer from "./components/footer";
import GameContent from "./components/gameContent";

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <GameContent />
      <Footer />
    </div>
  );
}
