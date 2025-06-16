'use client';

import { useEffect, useState } from 'react';
import '../styles/OurClients.css';
import SectionHeader from '../components/SectionHeader';

const OurClients = () => {
  const clients = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Client ${i + 1}`,
    logo: `/images/client-${String(i + 1).padStart(2, '0')}.webp`,
  }));

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <div className="our-clients-section">
      <div className="container">
        <SectionHeader header="Our Clients" color="#134377" />

        <div className="clients-grid animate-one-by-one">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`client-card ${index === activeIndex ? 'active' : ''}`}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="client-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
