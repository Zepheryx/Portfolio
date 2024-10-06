import React, { useState, useEffect, useCallback, useRef } from 'react';
import anime from 'animejs';

const DotGrid = () => {
  const [gridDimensions, setGridDimensions] = useState({ width: 0, height: 0 });
  const animationRef = useRef(null); // Ref to hold animation instance

  useEffect(() => {
    const updateGridDimensions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const newGridWidth = Math.floor(viewportWidth / 24);
      const newGridHeight = Math.floor(viewportHeight / 26);
      setGridDimensions({ width: newGridWidth, height: newGridHeight });
    };

    updateGridDimensions();
    window.addEventListener('resize', updateGridDimensions);

    return () => window.removeEventListener('resize', updateGridDimensions);
  }, []);

  const triggerRandomWave = useCallback(() => {
    const totalDots = gridDimensions.width * gridDimensions.height;
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % totalDots;

    // Check if there's already an animation running and stop it
    if (animationRef.current) {
      animationRef.current.pause(); // Pause the previous animation
    }

    animationRef.current = anime({
      targets: ".dot-point",
      scale: [
        { value: 1.5, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -20, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(60, {
        grid: [gridDimensions.width, gridDimensions.height],
        from: randomIndex,
      }),
      complete: () => {
        // Automatically trigger the next wave animation after completion
        triggerRandomWave();
      },
    });
  }, [gridDimensions]); // Add gridDimensions as a dependency

  useEffect(() => {
    if (gridDimensions.width > 0 && gridDimensions.height > 0) {
      triggerRandomWave();
    }

    // Clean up: Stop animation if the component is unmounted
    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [gridDimensions, triggerRandomWave]); // Include triggerRandomWave

  const dots = [];
  let index = 0;
  for (let i = 0; i < gridDimensions.width; i++) {
    for (let j = 0; j < gridDimensions.height; j++) {
      dots.push(
        <div className="group" data-index={index} key={`${i}-${j}`}>
          <div className="dot-point" data-index={index} />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${gridDimensions.width}, 1fr)`,
        gridTemplateRows: `repeat(${gridDimensions.height}, 1fr)`,
      }}
      className="d-grid"
    >
      {dots}
    </div>
  );
};

export default DotGrid;
