import { Container } from "react-bootstrap";
import MoeImage from "../image/moe.png";

export default function Frase() {
  return (
    <Container>
      <h2 className="text-center">Moe Szyslak</h2>
      <hr></hr>
      <div className="d-flex justify-content-center">
        <img src={MoeImage} alt="Moe Szyslak"/>
      </div>
      <div className="bg-light p-4 text-center">
        <p className="fs-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, reprehenderit beatae obcaecati animi minima explicabo asperiores quas eligendi vero cum deserunt quae izpsam inventore repellendus amet itaque, libero fuga enim.
        </p>
        <p className="fs-5">
            Moe Szyslak in The Simpson
        </p>    
      </div>
    </Container>
  );
}
