
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
import chocolate13 from './Flowering_Chrysanthemum.webp';
import chocolate14 from './Flowering_Gardenia.jpeg';
import chocolate15 from './Flowering_Hibiscus.jpeg';
import chocolate16 from './Flowering_Impatiens.jpeg';
import chocolate17 from './Flowering_Ixora_Yellow.webp';
import chocolate18 from './FLowering_Kalanchoes.jpeg';
import chocolate19 from './Flowering_Lantana.jpg';
import chocolate20 from './Flowering_Loropetalum.jpg';
import chocolate21 from './Flowering_Mandevilla.jpeg';
import chocolate22 from './Flowering_Passiflora.webp';
import chocolate23 from './Flowering_Pentas.avif';
import chocolate24 from './Flowering_Plumeria.webp';
import chocolate25 from './Flowering_Poinsettia.jpg';
import chocolate26 from './Flowering_Tecoma.avif';

// outdoor
import vanilla1 from './Outdoor_Althenthra.webp';
import vanilla2 from './Outdoor_Ficus.jpg';
import vanilla3 from './Outdoor_Tecoma.jpg';
import vanilla4 from './Outdoor_Bougainvillea.webp';

// Hanging
import Hang1 from './Hanging_Ferns.avif';
import Hang2 from './Hanging_Moneyplant_Enjoy.webp';
import Hang3 from './Hanging_Moneyplant_Green.webp';
import Hang4 from './Hanging_Moneyplant_Marble.webp';

// Semi Shade
import Semi1 from './Semi_Petra_Croton.webp';
import Semi2 from './Semi_Arelia.jpeg';
import Semi3 from './Semi_Asparagus_sprengeri.jpeg';
import Semi4 from './Semi_Plectranthus.jpg';
import Semi5 from './Semi_Radermachera.jpg';
import Semi6 from './Semi_Kalanchoes.webp';
import Semi7 from './Semi_Succulents.jpg';

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
      { id: 19, name: "Chrysanthemum", price: 450, img: chocolate13 },
      { id: 20, name: "Gardenia", price: 500, img: chocolate14 },
      { id: 21, name: "Hibiscus", price: 350, img: chocolate15 },
      { id: 22, name: "Impatiens", price: 400, img: chocolate16 },
      { id: 23, name: "Ixora_Yellow", price: 450, img: chocolate17 },
      { id: 24, name: "Kalanchoes", price: 500, img: chocolate18 },
      { id: 25, name: "Lantana", price: 350, img: chocolate19 },
      { id: 26, name: "Loropetalum", price: 400, img: chocolate20 },
      { id: 27, name: "Mandevilla", price: 450, img: chocolate21 },
      { id: 28, name: "Passiflora", price: 500, img: chocolate22 },
      { id: 29, name: "Pentas", price: 350, img: chocolate23 },
      { id: 30, name: "Plumeria", price: 400, img: chocolate24 },
      { id: 31, name: "Poinsettia", price: 450, img: chocolate25 },
      { id: 32, name: "Tecoma", price: 500, img: chocolate26 },
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
      { id: 31, name: "Ferns", price: 400, img: Hang1 },
      { id: 32, name: "Money Plant - Enjoy", price: 550, img: Hang2 },
      { id: 33, name: "Money Plant - Green", price: 350, img: Hang3 },
      { id: 34, name: "Money Plant - Marble", price: 300, img: Hang4 },
    ]
  },
   {
    id: "6",
    label: "Semi Shade",
    products: [
      { id: 31, name: "Crossandra", price: 400, img: chocolate8 },
      { id: 32, name: "Money Plant", price: 550, img: Hang2 },
      { id: 33, name: "Ixora Orange", price: 350, img: chocolate10 },

      { id: 34, name: "Petra Croton", price: 300, img: Semi1 },
      { id: 34, name: "Arelia", price: 300, img: Semi2 },
      { id: 34, name: "Asparagus sprengeri", price: 300, img: Semi3 },

      { id: 34, name: "Hibiscus", price: 300, img: chocolate15 },
      { id: 34, name: "Ixora Yellow", price: 300, img: chocolate17 },
      { id: 34, name: "Impatiens", price: 300, img: chocolate16 },
      
      { id: 34, name: "Plectranthus", price: 300, img: Semi4 },
      { id: 34, name: "Radermachera", price: 300, img: Semi5 },
      { id: 34, name: "Kalanchoes", price: 300, img: Semi6 },

      { id: 34, name: "Carnation", price: 300, img: chocolate7 },
      { id: 34, name: "Pentas", price: 300, img: chocolate23 },
      { id: 34, name: "Chrysanthemum", price: 300, img: chocolate13 },

      { id: 34, name: "Succulents", price: 300, img: Semi7 },
      { id: 34, name: "Begonia", price: 300, img: chocolate6 },
      { id: 34, name: "Poinsettia", price: 300, img: chocolate25 },
      
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