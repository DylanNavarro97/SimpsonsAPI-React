import { Container } from "react-bootstrap";
import MoeImage from "../image/moe.png";

export default function Frase({personaje}) {
  return (
    <Container>
      <h2 className="text-center">{personaje.character}</h2>
      <hr></hr>
      <div className="d-flex justify-content-center">
        <img src={personaje.image} alt={personaje.character + " avatar"}/>
      </div>
      <div className="bg-light p-4 text-center my-3">
        <p className="fs-4">
            {personaje.quote}
        </p>
        <p className="fs-5">
            {personaje.character} in The Simpson
        </p>    
      </div>
    </Container>
  );
}
