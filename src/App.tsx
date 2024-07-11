import { Nav } from "./components/Nav";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import Shipping from "./components/Shipping";

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
