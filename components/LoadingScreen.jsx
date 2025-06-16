"use client"


import { useEffect, useRef, useState } from "react"
import Image from "next/image"


const LoadingScreen= ({ onComplete }) => {
  const textRef = useRef(null)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const completeTimeout = setTimeout(() => {
      setIsComplete(true)
      onComplete?.()
    }, 6000)

    const textMoveTimeout = setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.transform = "translateX(100px)"
      }
    }, 5100)

    return () => {
      clearTimeout(completeTimeout)
      clearTimeout(textMoveTimeout)
    }
  }, [onComplete])

  if (isComplete) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="loading-wrapper">
        <div className="bg-fill" />

        <div className="white-exit" />


        <div className="content-container">
{/*         
          <div className="logo-container">
            <div className="logo-fill">
              <Image src="/sppl-logo.png" alt="SPPL Logo" width={120} height={60} className="logo-image" />
            </div>
            <div className="logo-overlay">
              <Image src="/sppl-logo.png" alt="SPPL Logo" width={120} height={60} className="logo-image opacity-30" />
            </div>
          </div> */}

      
          <div className="water-fill" data-text="SPPL" ref={textRef}>
            SPPL
          </div>
        </div>
      </div>

      <style jsx>{`
        .loading-wrapper {
          position: relative;
          height: 100vh;
          width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-color: #FF5E15;
        }

        .bg-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background-color: #0c4379;
          z-index: 1;
          animation: bgFill 1s ease-in-out 4s forwards;
        }

        .white-exit {
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: white;
          z-index: 4;
          animation: slideWhite 1s ease-in-out 5s forwards;
        }

        .content-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          z-index: 2;
        }

        .logo-container {
          position: relative;
          width: 120px;
          height: 60px;
        }

        .logo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .logo-fill {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          overflow: hidden;
          z-index: 2;
          animation: fillLogo 4s ease-in-out forwards;
        }

        .logo-image {
          width: 120px;
          height: 60px;
          object-fit: contain;
        }

        .water-fill {
          position: relative;
          font-size: 4rem;
          font-weight: bold;
          text-transform: uppercase;
          font-family: 'Helvetica', Arial, sans-serif;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
          z-index: 2;
          transition: transform 1s ease-in-out;
        }

        .water-fill::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          color: white;
          overflow: hidden;
          white-space: nowrap;
          animation: fillText 4s ease-in-out forwards;
        }

        @keyframes fillLogo {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes fillText {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes bgFill {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes slideWhite {
          from { width: 0%; }
          to { width: 100%; }
        }

        @media (max-width: 768px) {
          .water-fill {
            font-size: 3rem;
          }
          
          .logo-container {
            width: 100px;
            height: 50px;
          }
          
          .logo-image {
            width: 100px;
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .water-fill {
            font-size: 2.5rem;
          }
          
          .logo-container {
            width: 80px;
            height: 40px;
          }
          
          .logo-image {
            width: 80px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  )
}

export default LoadingScreen
