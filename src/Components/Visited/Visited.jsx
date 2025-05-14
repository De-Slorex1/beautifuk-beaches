import React from 'react'
import '../Visited/Visited.css'
import { FaLongArrowAltRight } from "react-icons/fa";

const Visited = () => {
  return (
    <div>
       <h2 style={{textAlign:"center", fontSize:"2rem"}} >🌴 Most Visited Beaches</h2>
        <div className="beach-section">
      <div className="beach-cards">
        <img src="Copacabana Beach.jpg" alt="Copacabana Beach" />
        <h3>Copacabana Beach</h3>
        <p>Located in Rio de Janeiro, Brazil — known for its vibrant culture and stunning coastlines.</p>
        <button className="btn">
          Visit Now <FaLongArrowAltRight />
        </button>
      </div>
      <div className="beach-cards">
        <img src="Waikiki Beachs.jpg" alt="Waikiki Beach" />
        <h3>Waikiki Beach</h3>
        <p>Hawaii's iconic beach, great for surfing, luxury shopping, and crystal-clear waters.</p>
        <button className="btn">
          Visit Now <FaLongArrowAltRight />
        </button>
      </div>
      <div className="beach-cards">
        <img src="bondi.jpg" alt="Bondi Beach" />
        <h3>Bondi Beach</h3>
        <p>Australia’s world-famous beach offering golden sands, waves, and coastal walks.</p>
        <button className="btn">
          Visit Now <FaLongArrowAltRight />
        </button>
      </div>
</div>

    </div>
  )}
  export default Visited
