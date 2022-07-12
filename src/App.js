import "./index.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container className="w-100">
        <div className="app-box">
          <Navigation />
          <Pages />
        </div>
      </Container>
    </BrowserRouter>
  );
}

export default App;
