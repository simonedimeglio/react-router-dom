import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contatti from "./pages/Contatti";
import Pagina404 from "./pages/Pagina404";
import ListaProdotti from "./pages/ListaProdotti";
import DettaglioProdotto from "./pages/DettaglioProdotto";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/prodotti">Prodotti</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contatti">Contatti</Link>
            </li>
          </ul>
        </nav>

        <h1>Ciao Mamma</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodotti" element={<ListaProdotti />} />
          {/* PS: La seguente rotta non è volutamente nella navbar! */}
          <Route path="/prodotti/:id" element={<DettaglioProdotto />} />
          <Route path="/about" element={<About />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
