import { app } from "./firebase/index";
import "./index.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="p-6">
      Bienvenida a FireShopping!
      </main>
    </>
  );
}

export default App;
