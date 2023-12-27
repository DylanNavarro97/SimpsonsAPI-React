import { Button } from "react-bootstrap";
import "./App.css";
import Frase from "./components/Frase";
import SimpsonsLogo from "./image/logoSimpson.png";

function App() {
  return (
    <section>
      <div className="d-flex justify-content-center">
        <img src={SimpsonsLogo} alt="Simpson Logo" className="logoImg" />
      </div>
      <Frase></Frase>
      <div className="d-flex justify-content-center">
        <Button variant="warning" className="my-4">Obtener frase</Button>
      </div>
    </section>
  );
}

export default App;
