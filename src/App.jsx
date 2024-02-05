import { Button } from "react-bootstrap";
import "./App.css";
import Frase from "./components/Frase";
import SimpsonsLogo from "./image/logoSimpson.png";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    const respuesta = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const datos = await respuesta.json();
    setPersonaje(datos[0])
  };

  return (
    <section>
      <div className="d-flex justify-content-center">
        <img src={SimpsonsLogo} alt="Simpson Logo" className="logoImg" />
      </div>
      <Frase personaje={personaje}></Frase>
      <div className="d-flex justify-content-center">
        <Button variant="warning" onClick={consultarAPI} className="my-4">
          Obtener frase
        </Button>
      </div>
    </section>
  );
}

export default App;
