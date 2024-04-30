import { Nav } from "./Nav";
import { About } from "./About";
import { Footer } from "./Footer";
import Shipping from "./Shipping";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Shipping />
      <Nav />
      <About />
      <Footer />
    </>
  );
}

export default App;
