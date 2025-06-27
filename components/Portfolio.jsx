"use client";
import Image from "next/image";


import { useState, useEffect } from "react";
import "../styles/Portfolio.css";

// Add count for each category based on actual number of images
const categories = [
  { key: "chicago", title: "Chicago Pizza Delhi", prefix: "CHICAGO", count: 9 },
  { key: "chicagof", title: "Chicago Pizza Faridabad", prefix: "CF", count: 9 },
  { key: "residence", title: "Residence Vasant Vihar", prefix: "VASANT", count: 8 },
  { key: "guest", title: "Guest House Jasola", prefix: "guest-house", count: 9 },
  { key: "marco", title: "Marco Aldany", prefix: "marco-aldany", count: 2 },
  { key: "hyundai", title: "Hyundai Lucknow", prefix: "hyundai-lucknow", count: 1 },
  { key: "nishi", title: "Nishi Bag Delhi", prefix: "nishi-bag", count: 1 },
  { key: "solis", title: "Solis Noida", prefix: "solis-noida", count: 1 },
  { key: "iti", title: "ITI Office Hyderabad", prefix: "itl-office", count: 1 },
  { key: "decathlon", title: "Decathlon Jaipur", prefix: "decathlon-jaipur", count: 1 },
];

const portfolioData = categories.flatMap((cat, index) =>
  Array.from({ length: cat.count }, (_, i) => {
    const padded = String(i + 1).padStart(2, "0");
    return {
      id: index * 100 + i + 1,
      category: cat.key,
      title: cat.title,
      image: `/images/projects/${cat.prefix}-${padded}.webp`,
      className: "",
    };
  })
);


const filterOptions = [
  { key: "all", label: "All", filter: "all" },
  ...categories.map((cat) => ({
    key: cat.key,
    label: cat.title,
    filter: cat.key,
  })),
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState(portfolioData);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(portfolioData);
    } else {
      setFilteredItems(portfolioData.filter((item) => item.category === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section className="portfolio-section py-5">
      <div className="container-fluid">
        <div className="container">
          <div className="portfolio-tab mb-5">
            <ul id="filters" className="clearfix d-flex flex-wrap justify-content-center">
              {filterOptions.map((option) => (
                <li
                  key={option.key}
                  className={`filter ${activeFilter === option.filter ? "active" : ""}`}
                  onClick={() => handleFilterClick(option.filter)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="portfolio-grid row g-4" id="MixItUp8A7388">
        {filteredItems.map((item) => (
  <div key={item.id} className="col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-delay="100">
    <div className={`portfolio ${item.category}`} data-cat={item.category}>
      <div className={`portfolio-wrapper ${item.className}`}>
        <div className="portfolio-bg">
          <Image
            src={item.image}
            alt={item.title}
            width={600}
            height={400}
            className="img-fluid"
          />
        </div>
        <div className="label">
          <div className="label-text">
            <h4>{item.title}</h4>
          </div>
          <div className="label-bg"></div>
        </div>
      </div>
    </div>
  </div>
))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
