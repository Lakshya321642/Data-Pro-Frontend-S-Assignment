import React, { useState, useEffect, useRef } from 'react';
import Mycard from './Mycard.js';
import './Imagecarousel.css';

const Imagecarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const btnpressprev = () => {
    const width = containerRef.current.clientWidth;
    setScrollPosition(scrollPosition - width);
  };

  const btnpressnext = () => {
    const width = containerRef.current.clientWidth;
    setScrollPosition(scrollPosition + width);
  };

  useEffect(() => {
    const updateScrollWidth = () => {
      if (containerRef.current) {
        const { scrollWidth } = containerRef.current;
        setScrollPosition((prevPosition) => Math.min(prevPosition, scrollWidth - containerRef.current.clientWidth));
      }
    };

    window.addEventListener('resize', updateScrollWidth);
    updateScrollWidth();

    return () => {
      window.removeEventListener('resize', updateScrollWidth);
    };
  }, []);

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div className="product-container" ref={containerRef} style={{ transform: `translateX(-${scrollPosition}px)`, display: 'flex', flexDirection: 'row' }}>
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="3" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="6" />
        <Mycard cardno="7" />
        <Mycard cardno="8" />
        <Mycard cardno="9" />
        <Mycard cardno="10" />
        <Mycard cardno="11" />
        <Mycard cardno="12" />
        <Mycard cardno="13" />
      </div>
    </div>
  );
};

export default Imagecarousel;
