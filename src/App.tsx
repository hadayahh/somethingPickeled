import { Nav } from "./Nav";
import { About } from "./About";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div className="shipping-banner">
        <div>
          Enjoy complimentary standard delivery and samples with all orders.
        </div>
      </div>
      <Nav />
      <About />
      <Footer />
    </>
  );
}

export default App;
