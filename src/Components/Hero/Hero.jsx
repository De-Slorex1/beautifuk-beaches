import React, { useState, useEffect } from 'react';
import '../Hero/Hero.css';

const slides = [
  {
    image: '/Background.png',
    heading: 'Welcome To Beauty of Beaches',
    text: 'Explore the most serene coastal paradises',
    buttonText: 'Explore Beaches',
    buttonLink: '#beach-zones',
  },
  {
    image: '/SunsetView.jpg',
    heading: 'Sunsets & Shorelines',
    text: 'Witness the golden hues over calming waves',
    buttonText: 'See Sunsets',
    buttonLink: '#sunset-view',
  },
  {
    image: '/TropicalIsland.jpg',
    heading: 'Tropical Escapes Await',
    text: 'Find yourself in the most vibrant beach destinations',
    buttonText: 'Discover Tropics',
    buttonLink: '#tropical-beaches',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const { image, heading, text, buttonText, buttonLink } = slides[current];

  return (
    <div
      className="hero slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-content fade-slide">
        <h1>{heading}</h1>
        <p>{text}</p>
        <a href={buttonLink} className="hero-btn">{buttonText}</a>
      </div>
    </div>
  );
};

export default Hero;
