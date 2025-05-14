import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import '../NorthText/NorthText.css';

const beaches = [
  {
      name: "Marina beaches",
      location: "chennai,India",
      description: 'One of the longest urban beaches in the world.',
      image : ['Marina1.jpg','Marina2.jpg', 'Marina beaches3.jpg'],
      slug: 'marina-beaches',
  },
  {
      name: 'Mandarmani',
      location: 'West Bengal, India',
      description: 'Calm beach known for its peaceful sunsets.',
      image: ['mandarmani1.jpg', 'mandarmani2.jpg', 'Mandarmani3.jpg'],
      slug: 'Mandarmani',
  },
  {
    name:'Playa Norte',
    location:'Isla Mujeres, Mexico',
    description:'Known for its soft, white sand and shallow, clear waters, making it perfect for a relaxing day on the beach.',
    image: ['Playa1.jpg','Playa2.jpg', 'Playa Norte3.jpg'],
    slug: 'Playa Norte',
  },
  {
    name: 'Barafundle Bay',
    location: 'Pembrokeshire, Wales',
    description: 'A popular choice for those looking to brave the chill for a dip in the crystal-clear waters.',
    image: ['Bay1.jpg','Bay2.jpg', 'Barafundle Bay.jpg'],
    slug: 'Barafundle Bay',
  },
  {
    name: 'Lanikai Beach',
    location: 'Oahu, Hawaii',
    description: 'This calm and relaxing spot offers clear waters ideal for swimming, snorkeling, and kayaking, especially enjoyed during sunrise. ',
    image: ['hawaii.jpg','hawaii2.jpg', 'Lanikai Beach.jpg'],
    slug: 'Lanikai Beach',
  },
  {
    name: 'Seven Mile Beach',
    location: 'Cayman Islands',
    description: 'A long stretch of white sand and turquoise water, perfect for swimming, sunbathing, and various water sports like snorkeling and diving. ',
    image: ['Seven.jpg','Seven2.jpg', 'Seven Mile Beach.jpg'],
    slug: 'Seven Mile Beach',
  }
];

const NorthText = () => {
  return (
    <div className="north-beach-section">
      <h1>Northern Shores</h1>
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

export default NorthText;
