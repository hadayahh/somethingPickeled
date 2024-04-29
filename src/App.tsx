import { Nav } from "./Nav";
import { About } from "./About";
import { Footer } from "./Footer";
import Shipping from "./Shipping";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="*" element={<App />}></Route>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/nav" element={<Nav />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
      </Routes> */}
      <Shipping />
      <Nav />
      <About />
      <Footer />
    </>
  );
}

export default App;
