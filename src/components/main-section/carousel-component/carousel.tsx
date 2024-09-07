import React, { useState } from "react";

interface CarouselProps {
  slides: React.ReactNode[]; // Define slides as an array of React nodes
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slide}
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
