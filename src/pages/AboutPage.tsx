import Shipping from "../components/Shipping";
import { Nav } from "../components/Nav";
import "../index.css";

export function AboutPage() {
  return (
    <>
      <Shipping />
      <Nav />
      <div className="about-container">
        <h1>About Us</h1>
        <div className="about-content">
          <p>
            Welcome to our pickled pepper paradise, somethingPickled! Our story
            begins generations ago in the charming town of Idlib, Syria, where
            our family has perfected the art of pickling peppers. This treasured
            recipe has been passed down through the years, bringing joy and
            flavor to countless meals.
          </p>
          <p>
            We are thrilled to finally share this delicious tradition with the
            world. Our pickled peppers are a testament to the rich heritage and
            love that goes into every jar. From our family to yours, we hope you
            enjoy the unique taste and quality that has been cherished for
            generations.
          </p>
          <p>
            Leading this exciting journey is Fatena Saied, a remarkable woman
            who has dedicated herself to bringing our family's pickled peppers
            to your table. Fatena's passion and commitment ensure that each
            batch is made with the same care and authenticity that our family
            has always valued.
          </p>
          <p>
            Join us in celebrating this special tradition and savor the flavors
            that have stood the test of time. Thank you for being a part of our
            story and for allowing us to share our pickled peppers with you.
          </p>
          <h2>Fatena Saied</h2>
          <p>
            Fatena Saied, born and raised in Idlib, Syria, has always had a deep
            connection to her family's culinary heritage. With a heart full of
            passion and a commitment to preserving this beloved tradition,
            Fatena has embarked on this journey to bring the authentic taste of
            our pickled peppers to the world. Her dedication to quality and
            authenticity shines through in every jar, ensuring that our pickled
            peppers remain a true family treasure.
          </p>
        </div>
      </div>
    </>
  );
}
