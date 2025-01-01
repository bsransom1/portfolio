import { useEffect, useState } from 'react';

function Background() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 200 }, () => ({
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        duration: Math.random() * 5 + 10, // Faster animation duration
        delay: Math.random() * -20, // Random negative delay for variety
        direction: Math.random() > 0.5 ? 1 : -1, // Random vertical direction
        distance: Math.random() * 20 + 5 // Random movement distance
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-slate-800" />
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0, // Start with invisible
            animation: `
              fadeIn 3s forwards,
              twinkle ${star.duration * 0.5}s infinite ${star.delay}s,
              float${star.direction > 0 ? 'Up' : 'Down'} ${star.duration}s infinite ${star.delay}s,
              sideFloat ${star.duration}s infinite ${star.delay}s
            `
          }}
        />
      ))}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }

          @keyframes floatUp {
            0% { transform: translateY(0); }
            50% { transform: translateY(-${Math.random() * 20 + 10}px); }
            100% { transform: translateY(0); }
          }

          @keyframes floatDown {
            0% { transform: translateY(0); }
            50% { transform: translateY(${Math.random() * 20 + 10}px); }
            100% { transform: translateY(0); }
          }

          @keyframes sideFloat {
            0% { transform: translateX(0); }
            50% { transform: translateX(${Math.random() * 20 + 10}px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
}

export default Background;


