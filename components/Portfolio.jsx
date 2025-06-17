"use client"

import { useState, useEffect } from "react"
import "../styles/Portfolio.css"

const portfolioData = [
  {
    id: 1,
    category: "chicago",
    title: "Chicago Pizza Delhi",
    image: "/placeholder.svg?height=300&width=400",
    className: "first",
  },
  {
    id: 2,
    category: "chicago",
    title: "Chicago Pizza Delhi",
    image: "/placeholder.svg?height=300&width=400",
    className: "",
  },
  {
    id: 3,
    category: "chicago",
    title: "Chicago Pizza Delhi",
    image: "/placeholder.svg?height=300&width=400",
    className: "",
  },
  {
    id: 4,
    category: "chicagof",
    title: "Chicago Pizza Faridabad",
    image: "/placeholder.svg?height=300&width=400",
    className: "second",
  },
  {
    id: 5,
    category: "chicagof",
    title: "Chicago Pizza Faridabad",
    image: "/placeholder.svg?height=300&width=400",
    className: "second",
  },
  {
    id: 6,
    category: "residence",
    title: "Residence Vasant Vihar",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 7,
    category: "residence",
    title: "Residence Vasant Vihar",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 8,
    category: "guest",
    title: "Guest House Jasola",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 9,
    category: "guest",
    title: "Guest House Jasola",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 10,
    category: "marco",
    title: "Marco Aldany",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 11,
    category: "marco",
    title: "Marco Aldany",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 12,
    category: "hyundai",
    title: "Hyundai Lucknow",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 13,
    category: "nishi",
    title: "Nishi Bag Delhi",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 14,
    category: "solis",
    title: "Solis Noida",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 15,
    category: "iti",
    title: "ITI Office Hyderabad",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
  {
    id: 16,
    category: "decathlon",
    title: "Decathlon Jaipur",
    image: "/placeholder.svg?height=300&width=400",
    className: "third",
  },
]

const filterOptions = [
  { key: "all", label: "All", filter: "all" },
  { key: "chicago", label: "Chicago Pizza Delhi", filter: "chicago" },
  { key: "chicagof", label: "Chicago Pizza Faridabad", filter: "chicagof" },
  { key: "residence", label: "Residence Vasant Vihar", filter: "residence" },
  { key: "guest", label: "Guest House Jasola", filter: "guest" },
  { key: "marco", label: "Marco Aldany", filter: "marco" },
  { key: "hyundai", label: "Hyundai Lucknow", filter: "hyundai" },
  { key: "nishi", label: "Nishi Bag Delhi", filter: "nishi" },
  { key: "solis", label: "Solis Noida", filter: "solis" },
  { key: "iti", label: "ITI Office Hyderabad", filter: "iti" },
  { key: "decathlon", label: "Decathlon Jaipur", filter: "decathlon" },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredItems, setFilteredItems] = useState(portfolioData)

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(portfolioData)
    } else {
      setFilteredItems(portfolioData.filter((item) => item.category === activeFilter))
    }
  }, [activeFilter])

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

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
                      <img src={item.image || "/placeholder.svg"} className="img-fluid" alt={item.title} />
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
  )
}

export default Portfolio
