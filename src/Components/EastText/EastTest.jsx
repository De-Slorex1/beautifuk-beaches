import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import '../NorthText/NorthText.css';

const beaches = [
    {
        name: "Anse Source d'Argent",
        location: "Seychelles",
        description: 'Known for its granite boulders, white sand, and turquoise waters, as reported by the Seychelles tourism board. ',
        image : ['Anses1.jpg','Anses2.jpg'],
        slug: "Anse Source d'Argent"
    },
    {
        name: 'Hidden Beach',
        location: 'Palawan, Philippines',
        description: 'A hidden gem with stunning limestone cliffs and white sand.',
        image: ['Philip.jpg', 'Philip2.jpg'],
        slug: "Hidden Beach"
    },
    {
      name:'Nags Head',
      location:'North Carolina',
      description:'A popular beach town on the Outer Banks, known for its sand dunes and proximity to Jockey Ridge State Park. ',
      image: ['Head1.jpg','Head2.jpg'],
      slug: "Nags Head"
    },
    {
      name: 'Bheemili Beach',
      location: 'India',
      description: 'A popular beach known for its pristine beauty and laid-back vibe.',
      image: ['india1.jpg','india2.jpg'],
      slug: "Bheemili Beach"
    },
    {
      name: 'Eagle Beach',
      location: 'Aruba',
      description: 'A famous beach known for its wide stretch of soft, white sand. ',
      image: ['Eagle1.jpg','Eagle2.jpg'],
      slug: "Eagle Beach"
    },
    {
      name: 'Grace Bay',
      location: 'Turks and Caicos',
      description: ' Known for its soft, white sand and clear, turquoise waters. ',
      image: ['Grace1.jpg','Grace2.jpg'],
      slug: "Grace Bay"
    }
  
  ];

const EastText = () => {
  return (
    <div className="north-beach-section">
      <h1>Eastern Shores</h1>
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

export default EastText;
