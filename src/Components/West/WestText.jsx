import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import '../NorthText/NorthText.css';

const beaches = [
    {
        name: "Waikiki Beach",
        location: "Honolulu, Hawaii, USA",
        description:"Waikiki Beach in Honolulu, Hawaii, is one of the world’s most iconic beaches. Known for its golden sands and views of Diamond Head crater, it’s ideal for beginner surfers. The beach bustles with energy, surrounded by luxury resorts, restaurants, and cultural experiences like hula shows.",
        image : ['Whitehaven.jpg','Whitehaven1.jpg'],
        slug: 'Waikiki Beach'
    },
    {
        name: "Copacabana",
        location:"Rio de Janeiro, Brazil",
        description:"Copacabana Beach in Rio de Janeiro is famed for its 4-km stretch of white sand and vibrant social scene. Locals and tourists alike flock here for beach soccer, caipirinhas, and stunning views of Sugarloaf Mountain. The iconic black-and-white wave mosaic promenade enhances its charm.",
        image : ['cobacacna1.jpg','cobacana2.jpg'],
        slug: 'Copacabana'
    },
    {
        name: "Seven Mile Beach",
        location:"Grand Cayman, Cayman Islands",
        description:"Located in Grand Cayman, Seven Mile Beach is known for its crystal-clear waters and coral sands. It's ideal for snorkeling, paddleboarding, and sunset walks. Luxury resorts and beach bars line this Caribbean paradise, offering world-class amenities and vibrant marine life.",
        image: ['bondi beach 1.jpg','bondi beach 2.jpg'],
        slug: 'Seven Mile Beach',
    },
    {
        name: "Cancún Beach",
        location:"Cancún, Quintana Roo, Mexico",
        description:"Cancún's beaches are known for turquoise Caribbean waters, powdery white sand, and lively resort life. It’s a top spring break and honeymoon destination, with coral reefs perfect for snorkeling and diving.",
        image: ['Ipanema Beach 1.jpg', 'matira beach 1.jpg'],
        slug: 'Cancún Beach'
    },
    {
        name: "Bavaro Beach",
        location:"Punta Cana, Dominican Republic",
        description:"Bávaro Beach in Punta Cana features miles of palm-fringed shoreline and calm turquoise waters. Popular for all-inclusive resorts, catamaran tours, and water sports, it’s a favorite Caribbean escape with tranquil vibes and scenic beauty.",
        image: ['Ipanema beach 2.jpg','Matira beach 2.jpg'],
        slug: 'Bavaro Beach'
    },
    {
        name: "Venice Beach",
        location:"Los Angeles, California, USA",
        description:"Venice Beach is a lively coastal hub in Los Angeles, known for its eclectic boardwalk, Muscle Beach, street performers, and artsy culture. While the Pacific waters can be cool, the atmosphere is electric and endlessly entertaining."
        ,
        image: ['muizenberg-beach.jpg' , 'muizenburg-beach 2.jpg'],
        slug: 'Venice Beach'
    }
]


const WestText = () => {
  return (
    <div className="north-beach-section">
      <h1>Western Shores</h1>
      <div className="beach-grid">
        {beaches.map((beach, index) => (
          <Link to={`/beach/${beach.slug}`} key={index}>  {/* Link to the beach detail page */}
            <div className="beach-card">
              <img src={beach.image[0]} alt={beach.name} />
              <h3>{beach.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WestText;
