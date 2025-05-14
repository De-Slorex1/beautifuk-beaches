import React from 'react';
import { useParams } from 'react-router-dom';
import './beachDetails.css';

const beaches = [
  {
      name: "Marina beaches",
      location: "Chennai,India",
      description: 'One of the longest urban beaches in the world.',
      image : ['https://i.postimg.cc/SNzZdXTZ/Marina1.jpg','https://i.postimg.cc/LXbTBRzK/Marina2.jpg', 'https://i.postimg.cc/vZsp6LY7/Marina-beaches3.jpg'],
      slug: 'marina-beaches',
  },
  {
      name: 'Mandarmani',
      location: 'West Bengal, India',
      description: 'Calm beach known for its peaceful sunsets.',
      image: ['https://i.postimg.cc/ZKZGWxK8/mandarmani1.jpg', 'https://i.postimg.cc/Cxx9NM8d/mandarmani2.jpg', 'https://i.postimg.cc/W3gy3hBY/Mandarmani3.jpg'],
      slug: 'Mandarmani',
  },
  {
    name:'Playa Norte',
    location:'Isla Mujeres, Mexico',
    description:'Known for its soft, white sand and shallow, clear waters, making it perfect for a relaxing day on the beach.',
    image: ['https://i.postimg.cc/RF5PjvW7/Playa1.jpg','https://i.postimg.cc/MGkbGdzx/Playa2.jpg', 'https://i.postimg.cc/0Ndmyvtd/Playa-Norte3.jpg'],
    slug: 'Playa Norte',
  },
  {
    name: 'Barafundle Bay',
    location: 'Pembrokeshire, Wales',
    description: 'A popular choice for those looking to brave the chill for a dip in the crystal-clear waters.',
    image: ['https://i.postimg.cc/htRfzwQC/Bay1.jpg','https://i.postimg.cc/bv3J5wCM/Bay2.jpg', 'https://i.postimg.cc/qBts2Pg0/Barafundle-Bay.jpg'],
    slug: 'Barafundle Bay',
  },
  {
    name: 'Lanikai Beach',
    location: 'Oahu, Hawaii',
    description: 'This calm and relaxing spot offers clear waters ideal for swimming, snorkeling, and kayaking, especially enjoyed during sunrise. ',
    image: ['https://i.postimg.cc/jqz5VcFP/hawaii.jpg','https://i.postimg.cc/zX7GvB5f/hawaii2.jpg', 'https://i.postimg.cc/3Jt37cC4/Lanikai-Beach.jpg'],
    slug: 'Lanikai Beach',
  },
  {
    name: 'Seven Mile Beach',
    location: 'Cayman Islands',
    description: 'A long stretch of white sand and turquoise water, perfect for swimming, sunbathing, and various water sports like snorkeling and diving. ',
    image: ['https://i.postimg.cc/BbMfSjD9/Seven.jpg','https://i.postimg.cc/ZYcSFMQ7/Seven2.jpg', 'https://i.postimg.cc/nzFdH01r/Sunset-View.jpg'],
    slug: 'Seven Mile Beach',
  },
  {
       name:"Bondi Beach",
       location:"Sydney, New South Wales, Australia",
       description: "Bondi Beach in Sydney is one of Australia’s most famous coastal spots. Surfers flock to its powerful waves, while sunbathers enjoy golden sands and a vibrant promenade. It's also home to the Bondi Icebergs Pool and the scenic Bondi to Coogee coastal walk.",
       image: ['https://i.postimg.cc/XqsnyX7Y/Canc-n-Beach-1.jpg','https://i.postimg.cc/PrcjGgC9/venice-beach-1.jpg', 'https://i.postimg.cc/qMBsfFPs/Canc-n-Beach-2.jpg'],
       slug: "Bondi Beach"
   },
   {
       name:"Anse Source d’Argent",
       location:"La Digue, Seychelles",
       description: "Located on La Digue Island, this Seychelles beach is famed for pink-hued sands, clear turquoise water, and dramatic granite boulders. Calm, shallow waters and coral reefs make it ideal for snorkeling. It’s a dreamscape for photographers and beach lovers alike.",
       image: ['https://i.postimg.cc/x8m3rcLt/Canc-n-Beach-2.jpg','https://i.postimg.cc/pdYNvLJV/Bavaro-Beach-1.jpg','https://i.postimg.cc/y6M6PkxW/Anse.jpg'],
       slug: "Anse Source d’Argent"
   },
   {
       name:"Whitehaven Beach",
       location:"Queensland, Australia",
       description: "Located in the Whitsundays, Whitehaven Beach is known for its pure white silica sand and swirling turquoise waters. Accessible only by boat or seaplane, it's often ranked among the world’s best beaches and offers a peaceful, eco-friendly escape in the heart of the Great Barrier Reef.",
       image: ['https://i.postimg.cc/XJz2Frfg/Copacabana-1.jpg','https://i.postimg.cc/FKms5RJG/venice-beach-2.jpg','https://i.postimg.cc/gcyCQDK9/Anses2.jpg'],
       slug: "Whitehaven Beach"
   },
   {
       name:"Muizenberg Beach",
       location:"Cape Town, South Africa",
       description: "This family-friendly beach near Cape Town features a long stretch of soft sand and colorful beach huts. It's famous for being one of the best beginner surf spots in South Africa, with consistent waves and a relaxed vibe. The scenic False Bay backdrop adds to its charm.",
       image: ['https://i.postimg.cc/gcQnnGZq/Background.png','https://i.postimg.cc/j2FgrLg1/Seven-Mile-Beach-1.jpg', 'https://i.postimg.cc/QdyT6nCc/Barafundle-Bay.jpg'],
       slug: "Muizenberg Beach"
   },
   {
       name:"Matira Beach",
       location:"Bora Bora, French Polynesia",
       description: "Located in Bora Bora, Matira Beach is the island’s most accessible public beach. Its shallow, crystal-clear waters, soft sand, and palm-fringed shores make it perfect for swimming and relaxing. It’s a quintessential South Pacific paradise.",
       image:['https://i.postimg.cc/nz6QGdF0/Seven-Mile-Beach-2.webp','https://i.postimg.cc/2ScdB7ZX/Waikiki-Beach-1.jpg','https://i.postimg.cc/7LvxYpLH/Philip.jpg'],
       slug: "Matira Beach"
   },
   {
       name:"Ipanema Beach",
       location:"Rio de Janeiro, Brazil",
       description: "Though also in Rio de Janeiro, Ipanema lies slightly south of the equator and is technically in the Southern Hemisphere. It's famous for its upscale vibe, dramatic mountain views, and being immortalized in the song “The Girl from Ipanema.” Trendy and scenic, it's a hotspot for locals and visitors alike.",
       image: ['https://i.postimg.cc/zDKNfdgp/Waikiki-Beach-2.jpg','https://i.postimg.cc/zv7RWTBf/Copacabana-Beach.jpg','https://i.postimg.cc/kXtvzpBN/Whitehaven.jpg'],
       slug: "Ipanema Beach"
    },
    {
        name: "Waikiki Beach",
        location: "Honolulu, Hawaii, USA",
        description:"Waikiki Beach in Honolulu, Hawaii, is one of the world’s most iconic beaches. Known for its golden sands and views of Diamond Head crater, it’s ideal for beginner surfers. The beach bustles with energy, surrounded by luxury resorts, restaurants, and cultural experiences like hula shows.",
        image : ['https://i.postimg.cc/zDKNfdgp/Waikiki-Beach-2.jpg','https://i.postimg.cc/qRZwPtyg/Waikiki-Beachs.jpg','https://i.postimg.cc/rF9BHjzp/waikiki.jpg'],
        slug: 'Waikiki Beach'
    },
    {
        name: "Copacabana",
        location:"Rio de Janeiro, Brazil",
        description:"Copacabana Beach in Rio de Janeiro is famed for its 4-km stretch of white sand and vibrant social scene. Locals and tourists alike flock here for beach soccer, caipirinhas, and stunning views of Sugarloaf Mountain. The iconic black-and-white wave mosaic promenade enhances its charm.",
        image : ['https://i.postimg.cc/FKtsrGgQ/cobacacna1.jpg','https://i.postimg.cc/B6NGWCns/Tropical-Island.jpg','https://i.postimg.cc/CLdXxqNh/Sunset-View.jpg'],
        slug: 'Copacabana'
    },
    {
        name: "Seven Mile Beach",
        location:"Grand Cayman, Cayman Islands",
        description:"Located in Grand Cayman, Seven Mile Beach is known for its crystal-clear waters and coral sands. It's ideal for snorkeling, paddleboarding, and sunset walks. Luxury resorts and beach bars line this Caribbean paradise, offering world-class amenities and vibrant marine life.",
        image: ['https://i.postimg.cc/sgMt2h3P/bondi-beach-1.jpg','https://i.postimg.cc/CK2FrgmY/bondi-beach-2.jpg','https://i.postimg.cc/65z8KT0f/bondi.jpg'],
        slug: 'Seven Mile Beach',
    },
    {
        name: "Cancún Beach",
        location:"Cancún, Quintana Roo, Mexico",
        description:"Cancún's beaches are known for turquoise Caribbean waters, powdery white sand, and lively resort life. It’s a top spring break and honeymoon destination, with coral reefs perfect for snorkeling and diving.",
        image: ['https://i.postimg.cc/C5cJbSGT/Ipanema-Beach-1.jpg', 'https://i.postimg.cc/sXT6GxBz/matira-beach-1.jpg','https://i.postimg.cc/L5pm0y9v/Grace2.jpg'],
        slug: 'Cancún Beach'
    },
    {
        name: "Bavaro Beach",
        location:"Punta Cana, Dominican Republic",
        description:"Bávaro Beach in Punta Cana features miles of palm-fringed shoreline and calm turquoise waters. Popular for all-inclusive resorts, catamaran tours, and water sports, it’s a favorite Caribbean escape with tranquil vibes and scenic beauty.",
        image: ['https://i.postimg.cc/C59ktBrw/Ipanema-beach-2.jpg','https://i.postimg.cc/CLLbP0vZ/Matira-beach-2.jpg','https://i.postimg.cc/W3yt5RtZ/muizenburg-beach-2.jpg'],
        slug: 'Bavaro Beach'
    },
    {
        name: "Venice Beach",
        location:"Los Angeles, California, USA",
        description:"Venice Beach is a lively coastal hub in Los Angeles, known for its eclectic boardwalk, Muscle Beach, street performers, and artsy culture. While the Pacific waters can be cool, the atmosphere is electric and endlessly entertaining.",
        image: ['https://i.postimg.cc/3xBvTcdy/muizenberg-beach.jpg' , 'https://i.postimg.cc/W3yt5RtZ/muizenburg-beach-2.jpg','https://i.postimg.cc/3xBvTcdy/muizenberg-beach.jpg'],
        slug: 'Venice Beach'
    },
    {
        name: "Anse Source d'Argent",
        location: "Seychelles",
        description: 'Known for its granite boulders, white sand, and turquoise waters, as reported by the Seychelles tourism board. ',
        image : ['https://i.postimg.cc/RhJvQzKk/Anses1.jpg','https://i.postimg.cc/gcyCQDK9/Anses2.jpg','https://i.postimg.cc/VLHhZRcX/Bay2.jpg'],
        slug: "Anse Source d'Argent"
    },
    {
        name: 'Hidden Beach',
        location: 'Palawan, Philippines',
        description: 'A hidden gem with stunning limestone cliffs and white sand.',
        image: ['https://i.postimg.cc/7LvxYpLH/Philip.jpg', 'https://i.postimg.cc/9XwWCJWF/Philip2.jpg','https://i.postimg.cc/y6M6PkxW/Anse.jpg'],
        slug: "Hidden Beach"
    },
    {
      name:'Nags Head',
      location:'North Carolina',
      description:'A popular beach town on the Outer Banks, known for its sand dunes and proximity to Jockey Ridge State Park. ',
      image: ['https://i.postimg.cc/7LYfP06P/Head1.jpg','https://i.postimg.cc/rprFwjTk/Head2.jpg','https://i.postimg.cc/CK2FrgmY/bondi-beach-2.jpg'],
      slug: "Nags Head"
    },
    {
      name: 'Bheemili Beach',
      location: 'India',
      description: 'A popular beach known for its pristine beauty and laid-back vibe.',
      image: ['https://i.postimg.cc/PrTgL4Wj/india1.jpg','https://i.postimg.cc/6Qrgcbxz/india2.jpg','https://i.postimg.cc/gcyCQDK9/Anses2.jpg'],
      slug: "Bheemili Beach"
    },
    {
      name: 'Eagle Beach',
      location: 'Aruba',
      description: 'A famous beach known for its wide stretch of soft, white sand. ',
      image: ['https://i.postimg.cc/DzYhLYrD/Eagle1.jpg','https://i.postimg.cc/Vvvb4hpC/Eagle2.jpg','https://i.postimg.cc/zGv7ctZ8/Canc-n-Beach-1.jpg'],
      slug: "Eagle Beach"
    },
    {
      name: 'Grace Bay',
      location: 'Turks and Caicos',
      description: ' Known for its soft, white sand and clear, turquoise waters. ',
      image: ['https://i.postimg.cc/cHLfv6xZ/Grace1.jpg','https://i.postimg.cc/L5pm0y9v/Grace2.jpg','https://i.postimg.cc/7LYfP06P/Head1.jpg'],
      slug: "Grace Bay"
    }
];



// const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000); // 5 seconds per slide
//     return () => clearInterval(interval);
//   }, []);

//   const { image } = slides[current];

const BeachDetail = () => {
  const { slug } = useParams();
  const beach = beaches.find(b => b.slug === slug);  // Find the beach based on slug

  if (!beach) return <div>Beach not found!</div>;

  return (
    <>
      <div className="beach-detail-page">
        <h1>{beach.name}</h1>
        <img className='beachImages' src={beach.image[0]} alt={beach.name} />
        <h3>Location: {beach.location}</h3>
        <p>About: {beach.description}</p>
        <h3>Photo Gallery</h3>
        <div className="beach-images">
          {beach.image.map((img, i) => (
            <img key={i} src={img} alt={`${beach.name} ${i}`} />
          ))}
        </div>
        <a
          href={`/downloads/${beach.slug}.pdf`}
          download
          className="download-btn"
        >
          Download Details as PDF
        </a>
      </div>
      <div className='advert'>
        <img src='https://i.postimg.cc/Cxwd3R6w/7716601.jpg' alt='advert' />
      </div>
    </>
  );
};

export default BeachDetail;






