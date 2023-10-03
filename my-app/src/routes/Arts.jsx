import House from "../components/House";
import Navbar from "../components/Navbar";
import React, { useState ,useEffect } from 'react';
import "../routes/Arts.css";


const artsData = [
  {
    id: 1,
    title: 'The Artist Garden at Giverny',
    description: 'The Artist Garden at Giverny is a masterpiece by Claude Monet, painted in 1900. This Impressionist work captures the lush and vibrant beauty of Monets own garden in Giverny, France, where he spent much of his life. With its vivid and harmonious color palette, the painting depicts a profusion of flowers, including irises, poppies, and wisteria, enveloping the viewer in a tranquil and immersive natural setting.',
    imageUrl: 'https://wallpapers.com/images/hd/claude-monet-s-artist-s-garden-at-giverny-rqglqfqv4kkikw6p.jpg',
  },
  {
    id: 2,
    title: 'Nighthawks by Edward Hopper',
    description: 'Nighthawks is a 1942 oil on canvas painting by Edward Hopper. It depicts individuals in a downtown coffee shop late in the evening, seen through the burger joints enormous glass window. ',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1771/4067/files/Nighthawks_by_Edward_Hopper_large.jpg?v=1571688039',
  },
  {
    id: 3,
    title: 'Wheat Field with Cypresses at the Haude Galline near Eygalieres by Vincent van Gogh',
    description: 'A Wheatfield with Cypresses is one of three wheat field works by Vincent van Gogh, all of which date from 1889 and are part of his wheat field series. Van Gogh was voluntarily a patient at the Saint-Paul-de-Mausole mental institute in Saint-Rémy near Arles, France, from May 1889 to May 1890, when he showed all of his works.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1771/4067/files/Wheat_Field_with_Cypresses_at_the_Haude_Galline_near_Eygalieres_by_Vincent_van_Gogh_large.jpeg?v=1571716622',
  },
  {
    id: 4,
    title: 'The Card Players',
    description: 'The card players is a series of oil paintings by the French Post-Impressionist artist Paul Cezanne.Painted during cezannes final period in early 1890s.There are five paintings in series.',
    imageUrl: 'https://www.whataportrait.com/wp_blog/wp-content/uploads/2023/04/image16-4.png',
  },
  {
    id: 5,
    title: 'Boulevard Montmartre Spring by Camille Pissarro',
    description: 'Pissarros technique to the systematic examination of a number of views of the same subject is revealed in the Boulevard Montmartre series, which has a remarkable scope and variety. The artist examined the many climatic conditions of the street while focusing on a single compositional element - the majestic procession of the Boulevard Montmartre.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1771/4067/files/Boulevard_Montmartre_Spring_by_Camille_Pissarro_large.jpg?v=1571716464',
  },
  {
    id: 6,
    title: 'Water Lilies',
    description: 'Water Lilies by Claude Monet: Monets series of water lily paintings, created in the late 19th and early 20th centuries, are celebrated for their tranquil and impressionistic depiction of his garden.Claude Monet is a mesmerizing series of oil paintings that capture the serene beauty of his lush water garden in Giverny, France. Using vibrant colors and delicate brushwork, Monet masterfully portrays the reflective surface of the pond, dotted with floating lily pads and surrounded by willow trees and foliage',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/WLA_metmuseum_Water_Lilies_by_Claude_Monet.jpg/405px-WLA_metmuseum_Water_Lilies_by_Claude_Monet.jpg',
  },
  {
    id: 7,
    title: 'Paris Street In Rainy Weather by Gustave Caillebotte',
    description: 'Gustave Caillebottes best-known work, Paris Street; Rainy Day, is a massive 1877 oil painting by the French artist Gustave Caillebotte. It depicts a group of people going through the Place de Dublin, then known as the Carrefour de Moscou in north Paris at a crossroads east of the Gare Saint-Lazare.',
    imageUrl: 'https://cdn.shopify.com/s/files/1/1771/4067/files/Paris_Street_In_Rainy_Weather_by_Gustave_Caillebotte_large.jpg?v=1571694342',
  },
];

function Arts() {
  const [selectedArt, setSelectedArt] = useState(null);

  const handleArtClick = (art) => {
    setSelectedArt(art);
  };

  return (
    <>
      <Navbar />
      <div className="arts-container">
        <div className="arts-list">
          {artsData.map((art) => (
            <div
              key={art.id}
              className="art-item"
              onClick={() => handleArtClick(art)}
            >
              <img src={art.imageUrl} alt={art.title} />
              <div className="art-details">
                <h2>{art.title}</h2>
                <p>{art.description}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default Arts;

