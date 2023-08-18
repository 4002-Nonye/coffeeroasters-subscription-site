import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Plan from "./pages/Plan/Plan";
import granExpresso from './assets/images/gran-expresso.svg'
import planalto from './assets/images/planalto.svg'
import piccollo from './assets/images/piccollo.svg'
import danche from './assets/images/danche.svg'
import coffeeBean from './assets/images/coffee-bean.svg'
import benefits from './assets/images/benefits.svg'
import transport from './assets/images/transport.svg'

const collections = [
  {
    title: "Gran Espresso",
    content:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",

    src:granExpresso,
  },
  {
    title: "Planalto",
    content:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    src:planalto,
  },
  {
    title: "Piccollo",
    content:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    src: piccollo,
  },
  {
    title: "Danche",
    content:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    src: danche,
  },
];

const reasons = [
  {
    title: "Best quality",
    content:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",

    src: coffeeBean,
  },
  {
    title: "Exclusive benefits",
    content:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
    src:benefits,
  },
  {
    title: "Free shipping",
    content:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    src: transport,
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
