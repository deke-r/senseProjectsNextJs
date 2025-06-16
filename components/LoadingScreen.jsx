import React, { useEffect, useRef } from 'react';
import '../styles/LoadingScreen.css';
import '../styles/Fonts.css';


const LoadingScreen = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.transform = 'translateX(100px)';
      }
    }, 5100); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='body-div'>

    <div className="loading-wrapper">
      <div className="bg-fill"></div>
      <div className="white-exit"></div>
      <div
        className="water-fill"
        data-text="SPPL"
        ref={textRef}
      >
        SPPL
      </div>
    </div>
    </div>

  );
};

export default LoadingScreen;
