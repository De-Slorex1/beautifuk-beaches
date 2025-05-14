import React from 'react'
import Slider from "react-slick";

const Carousel = () => {
    const beaches = [
        {
            name: "Maldives",
            description: "Crystal clear waters & serenity",
            image:"maldievs.jpeg"
        },
        {
            name: "Waikiki",
            description: "Surfing & vibrant nightlife",
             image:"waikiki.jpeg"
        },
        {
            name: "Whitehaven",
            description: "Softtest sand in the world",
             image:"whitehaven.jpeg"
        },
        {
            name: "Goa",
            description: "Popular for parties & sunsets",
             image:"goa.jpeg"
        }
    ];
        const settings = {
            dots: true,
            infinite: true ,
            slidesToShow: 3 ,
            slidesToScroll: 1 ,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {slidesToShow : 1},
                },
                {
                    breakpoint: 1024,
                    settings : {slidesToShow : 2}
                },
            ]
        };
  return (
    <div className="carousel-section">
    <h2>🌴 Most Visited Beaches</h2>
    <Slider {...settings}>
      {beaches.map((beach, index) => (
        <div className="carousel-card" key={index}>
          <img src={beach.image} alt={beach.name} />
          <h3>{beach.name}</h3>
          <p>{beach.desc}</p>
        </div>
      ))}
    </Slider>
  </div>
  )
}

export default Carousel
