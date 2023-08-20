import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import australia from './assets/images/australia.svg';
import benefits from './assets/images/benefits.svg';
import canada from './assets/images/canada.svg';
import coffeeBean from './assets/images/coffee-bean.svg';
import danche from './assets/images/danche.svg';
import granExpresso from './assets/images/gran-expresso.svg';
import piccollo from './assets/images/piccollo.svg';
import planalto from './assets/images/planalto.svg';
import transport from './assets/images/transport.svg';
import uk from './assets/images/UK.svg';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Plan from './pages/Plan/Plan';

const collections = [
  {
    title: 'Gran Espresso',
    content:
      'Light and flavorful blend with cocoa and black pepper for an intense experience',

    src: granExpresso,
  },
  {
    title: 'Planalto',
    content:
      'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    src: planalto,
  },
  {
    title: 'Piccollo',
    content:
      'Mild and smooth blend featuring notes of toasted almond and dried cherry',
    src: piccollo,
  },
  {
    title: 'Danche',
    content:
      'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    src: danche,
  },
];

const reasons = [
  {
    title: 'Best quality',
    content:
      'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',

    src: coffeeBean,
  },
  {
    title: 'Exclusive benefits',
    content:
      'Special offers and swag when you subscribe, including 30% off your first shipment.',
    src: benefits,
  },
  {
    title: 'Free shipping',
    content:
      'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    src: transport,
  },
];

const works = [
  {
    title: 'Pick your coffee',
    content: `Select from our evolving range 
      of artisan coffees. Our beans 
      are ethically sourced and we 
      pay fair prices for them. There 
      are new coffees in all profiles every month for you to try out.`,
  },
  {
    title: 'Choose the frequency',
    content: `Customize your order frequency, quantity, even your roast style 
     and grind type. Pause, skip or cancel your subscription with 
     no commitment through our online portal.`,
  },
  {
    title: 'Receive and enjoy!',
    content: `We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning 
     world-class coffees curated to provide a distinct tasting experience.`,
  },
];

const locations = [
  {
    title: 'United Kingdom',
    content: ['68  Asfordby Rd', 'Alcaston', 'SY6 1YA', '+44 1241 918425'],

    src: uk,
  },
  {
    title: 'Canada',
    content: [' 1528  Eglinton Avenue', ' Toronto ', ' Ontario M4P 1A6 ', '+1 416 485 2997'],
    src: canada,
  },
  {
    title: 'Australia',
    content: [' 36 Swanston Street ', ' Kewell ', '   Victoria ', ' +61 4 9928 3629`'],
    src: australia,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home collections={collections} reasons={reasons} works={works} />
          }
        />
        <Route path="about" element={<About locations={locations} />} />
        <Route path="plan" element={<Plan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
