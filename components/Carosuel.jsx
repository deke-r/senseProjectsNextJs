"use client"

import "../styles/Carousel.css"
import Link from "next/link"
import { useEffect } from "react"

const slides = [
  {
    src: "/images/Sense-Projects-Ncr.webp",
    title: "Best Construction Company in India",
    desc: "Sense Projects focusing on India residential building projects, extensions, conversions and refurbishments.",
  },
  {
    src: "/images/hero-carousel-2.webp",
    title: "Commercial Construction Experts",
    desc: "Delivering reliable and sustainable commercial construction services across India.",
  },
  {
    src: "/images/hero-carousel-3.jpg",
    title: "Modern Architecture & Design",
    desc: "Bringing visionary architecture to life with cutting-edge designs and technology.",
  },
  {
    src: "/images/man-holding-blueprint-while-standing-construction-site-against-sky_1048944-4929016.webp",
    title: "End-to-End Project Management",
    desc: "From planning to completion, we manage your construction journey seamlessly.",
  },
  {
    src: "/images/hero-carousel-5.jpg",
    title: "Trusted By Top Developers",
    desc: "Collaborating with the leading names in real estate and infrastructure.",
  },
]

const Carousel = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextBtn = document.querySelector("#carouselExampleDark .carousel-control-next")
      if (nextBtn) nextBtn.click()
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        {/* Slides */}
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="4000"
              key={index}
              style={{ position: "relative" }}
            >
              <img
                src={slide.src || "/placeholder.svg"}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
                style={{ height: "100vh", objectFit: "cover" }}
              />

              {/* Caption with Line Design */}
              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center"
                style={{
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  position: "absolute",
                  background: "rgba(0, 0, 0, 0.4)",
                  color: "#fff",
                  padding: "0 20px",
                  fontFamily: "Poppins",
                }}
              >
                <div className="header-content">
                  <div className="line"></div>
                  <h1 className="carousel-text-title animated-title" style={{ zIndex: 2 }}>
                    {slide.title}
                  </h1>
                  <p className="carousel-text-desc text-light" style={{ zIndex: 2, color: "lightgray", fontWeight: 600 }}>
                    {slide.desc}
                  </p>
                  <Link href="/contact" passHref>
                    <div
                      className="carousel-text-button btn rounded-pill text-light"
                      style={{ border: "2px solid #134377", zIndex: 2, padding: "12px 40px" }}
                    >
                      Get Started
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
          style={{ zIndex: 2 }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
          style={{ zIndex: 2 }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
