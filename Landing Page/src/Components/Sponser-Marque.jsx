import React from 'react';
import "./Sponser-Marque.css"
import Marquee from "react-marquee-slider";
import styled from 'styled-components';

const SponsorWrapper = styled.div`
  background-color: transparent;
  padding: 30px;
`;

const SponsorLogo = styled.img`
  height: 120px;
  margin: 0 20px;
`;

const SponsorMarquee = () => {
  const sponsors = [
    {
      name: 'Aston-Martin',
      logo: 'public/Sponsers/Aston-Martin.jpg',
    },
    {
      name: 'Chanel',
      logo: 'public/Sponsers/Chanel.jpg',
    },
    {
      name: 'Dior',
      logo: 'public/Sponsers/Dior.jpg',
    },
    {
      name: 'Ferrari',
      logo: 'public/Sponsers/Ferrari.jpg',
    },
    {
      name: 'Gucci',
      logo: 'public/Sponsers/Gucci.jpg',
    },
    {
        name: 'Prada',
        logo: 'public/Sponsers/Prada.jpg',
    },
    {
        name: 'Samsung',
        logo: 'public/Sponsers/Samsung.png',
    },
    {
        name: 'Adidas',
        logo: 'public/Sponsers/Adidas.png',
    },
    {
        name: 'Amazon',
        logo: 'public/Sponsers/Amazon.jpg',
    },
    {
        name: 'Rolex',
        logo: 'public/Sponsers/Rolex.jpg',
    },
  ];

  return (
    <SponsorWrapper>
        <div className="Sponser-Marque-Style">
            <h2 className="Title-Highlight"> Our Sponsors  </h2>
            <p> Your contribution truly makes all the difference!</p>
        </div>
        <Marquee velocity={30} resetAfterTries={200} scatterRandomly={false}>
            {sponsors.map((sponsor, index) => (
            <SponsorLogo key={index} src={sponsor.logo} alt={sponsor.name} />
            ))}
        </Marquee>
    </SponsorWrapper>
  );
};

export default SponsorMarquee;