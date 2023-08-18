import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Plan from "./pages/Plan/Plan";
const collections = [
  {
    title: "Gran Espresso",
    content:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",

    src: "images/gran-expresso.svg",
  },
  {
    title: "Planalto",
    content:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    src: "images/planalto.svg",
  },
  {
    title: "Piccollo",
    content:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    src: "images/piccollo.svg",
  },
  {
    title: "Danche",
    content:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    src: "images/danche.svg",
  },
];

const reasons = [
  {
    title: "Best quality",
    content:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",

    src: "images/coffee-bean.svg",
  },
  {
    title: "Exclusive benefits",
    content:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
    src: "images/benefits.svg",
  },
  {
    title: "Free shipping",
    content:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    src: "images/transport.svg",
  },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home collections={collections} reasons={reasons} />} />
          <Route path="about" element={<About />} />
          <Route path="plan" element={<Plan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
