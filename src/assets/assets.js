
import Tred from './TRED.jpg';

import Trend2 from './Trending2.jpg';

// Indoor
import caramel1 from './Indoor_Aglaonema.webp';
import caramel2 from './Indoor_Alocasia.webp';
import caramel3 from './Indoor_Areca_Palm .webp';
import caramel4 from './Indoor_Calathea.jpg';
import caramel5 from './Indoor_Dieffenbachia_Camilla.webp';
import caramel6 from './Indoor_Dracena.webp';
import caramel7 from './Indoor_Schefflera.jpg';

// Bonsai
import chocolate1 from './Bonsai_Jade.webp';
import chocolate2 from './Bonsai_Ficus.webp';
import chocolate3 from './Bonsai_Bougainvillea.jpeg';


// Flowering
import chocolate5 from './Flowering_Begonia_Venusta.webp';
import chocolate6 from './Flowering_begonia.png';
import chocolate7 from './Flowering_Carnation.jpg';
import chocolate8 from './Flowering_Crossandra.webp';
import chocolate9 from './Flowering_Ipomia.jpg';
import chocolate10 from './Flowering_Ixora_Orange.webp';
import chocolate11 from './Flowering_Jasmine.jpg';
import chocolate12 from './Flowering_Spathiphyllum.webp';

// outdoor
import vanilla1 from './Outdoor_Althenthra.webp';
import vanilla2 from './Outdoor_Ficus.jpg';
import vanilla3 from './Outdoor_Tecoma.jpg';
import vanilla4 from './Outdoor_Bougainvillea.webp';


export const flavorData = [
  {
    id: "chocolate",
    label: "Flowering",
    products: [
      { id: 11, name: "Begonia Venusta", price: 350, img: chocolate5 },
      { id: 12, name: "Begonia", price: 550, img: chocolate6 },
      { id: 13, name: "Carnation", price: 400, img: chocolate7 },
      { id: 14, name: "Crossandra", price: 300, img: chocolate8 },
      { id: 15, name: "Ipomia", price: 450, img: chocolate9 },
      { id: 16, name: "Ixora_Orange", price: 500, img: chocolate10 },
      { id: 17, name: "Jasmine", price: 350, img: chocolate11 },
      { id: 18, name: "Spathiphyllum", price: 400, img: chocolate12 },
    ]
  },
  {
    id: "scoops",
    label: "Bonsai",
    products: [
      { id: 1, name: "Jade Bonsai", price: 350, img: chocolate1 }, 
      { id: 2, name: "Ficus Bonsai", price: 400, img: chocolate2 },
      { id: 3, name: "Bougainvillea Bonsai", price: 350, img: chocolate3 },
      
    ]
  },
  {
    id: "caramel",
    label: "Indoor",
    products: [
      { id: 21, name: "Aglaonema", price: 600, img: caramel1 },
      { id: 22, name: "Alocasia", price: 550, img: caramel2 },
      { id: 23, name: "Areca Palm", price: 400, img: caramel3 },
      { id: 24, name: "Calathea", price: 350, img: caramel4 },
      { id: 25, name: "Dieffenbachia Camilla", price: 450, img: caramel5 },
      { id: 26, name: "Dracena", price: 500, img: caramel6 },
      { id: 27, name: "Schefflera", price: 550, img: caramel7 },
    ]
  },
  {
    id: "vanilla",
    label: "Outdoor",
    products: [
      { id: 31, name: "Ipomia", price: 400, img: chocolate9 },
      { id: 32, name: "Althenthra", price: 550, img: vanilla1 },
      { id: 32, name: "Ficus", price: 550, img: vanilla2 },
      { id: 33, name: "Tecoma", price: 350, img: vanilla3 },
      { id: 34, name: "Bougainvillea", price: 300, img: vanilla4 },
    ]
  },
   {
    id: "5",
    label: "Hanging",
    products: [
      { id: 31, name: "French Vanilla", price: 400, img: vanilla1 },
      { id: 32, name: "Vanilla Bean", price: 550, img: vanilla2 },
      { id: 33, name: "Snowy Cream", price: 350, img: vanilla3 },
      { id: 34, name: "White Velvet", price: 300, img: vanilla4 },
    ]
  },
   {
    id: "6",
    label: "Semi Shade",
    products: [
      { id: 31, name: "French Vanilla", price: 400, img: vanilla1 },
      { id: 32, name: "Vanilla Bean", price: 550, img: vanilla2 },
      { id: 33, name: "Snowy Cream", price: 350, img: vanilla3 },
      { id: 34, name: "White Velvet", price: 300, img: vanilla4 },
    ]
  }
];

export const TrendingIceImage = {
  id: "Trend",
  img: Tred 
};

export const Trending2Image = {
  id: "Trend2",
  img: Trend2 
};