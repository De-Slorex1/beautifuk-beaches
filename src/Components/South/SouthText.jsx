import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import '../NorthText/NorthText.css';

const beaches = [
   {
       name:"Bondi Beach",
       location:"Sydney, New South Wales, Australia",
       description: "Bondi Beach in Sydney is one of Australia’s most famous coastal spots. Surfers flock to its powerful waves, while sunbathers enjoy golden sands and a vibrant promenade. It's also home to the Bondi Icebergs Pool and the scenic Bondi to Coogee coastal walk.",
       image: ['Cancún Beach-1.jpg','venice beach 1.jpg'],
       slug: "Bondi Beach"
   },
   {
       name:"Anse Source d’Argent",
       location:"La Digue, Seychelles",
       description: "Located on La Digue Island, this Seychelles beach is famed for pink-hued sands, clear turquoise water, and dramatic granite boulders. Calm, shallow waters and coral reefs make it ideal for snorkeling. It’s a dreamscape for photographers and beach lovers alike.",
       image: ['Cancún Beach - 2.jpg','Bavaro Beach 1.jpg'],
       slug: "Anse Source d’Argent"
   },
   {
       name:"Whitehaven Beach",
       location:"Queensland, Australia",
       description: "Located in the Whitsundays, Whitehaven Beach is known for its pure white silica sand and swirling turquoise waters. Accessible only by boat or seaplane, it's often ranked among the world’s best beaches and offers a peaceful, eco-friendly escape in the heart of the Great Barrier Reef.",
       image: ['Copacabana 2.jpg','venice beach 2.jpg'],
       slug: "Whitehaven Beach"
   },
   {
       name:"Muizenberg Beach",
       location:"Cape Town, South Africa",
       description: "This family-friendly beach near Cape Town features a long stretch of soft sand and colorful beach huts. It's famous for being one of the best beginner surf spots in South Africa, with consistent waves and a relaxed vibe. The scenic False Bay backdrop adds to its charm.",
       image: ['Bavaro Beach 2.jpg','Seven Mile Beach 1.jpg'],
       slug: "Muizenberg Beach"
   },
   {
       name:"Matira Beach",
       location:"Bora Bora, French Polynesia",
       description: "Located in Bora Bora, Matira Beach is the island’s most accessible public beach. Its shallow, crystal-clear waters, soft sand, and palm-fringed shores make it perfect for swimming and relaxing. It’s a quintessential South Pacific paradise.",
       image:['Seven Mile Beach -2.webp','Waikiki Beach 1.jpg'],
       slug: "Matira Beach"
   },
   {
       name:"Ipanema Beach",
       location:"Rio de Janeiro, Brazil",
       description: "Though also in Rio de Janeiro, Ipanema lies slightly south of the equator and is technically in the Southern Hemisphere. It's famous for its upscale vibe, dramatic mountain views, and being immortalized in the song “The Girl from Ipanema.” Trendy and scenic, it's a hotspot for locals and visitors alike.",
       image: ['Waikiki Beach 2.jpg','Copacabana Beach.jpeg'],
       slug: "Ipanema Beach"
    }
]; 

const SouthText = () => {
  return (
    <div className="north-beach-section">
      <h1>Southern Shores</h1>
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

export default SouthText;
