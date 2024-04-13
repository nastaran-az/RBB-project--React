import React, {useEffect, useRef} from "react";

const FireflyBackground = ({numFireflies}) => {
  const canvasRef = useRef(null);
  const fireflies = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const createFirefly = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2 + 1;
      const alpha = Math.random() * 0.5 + 0.5;
      const speedX = Math.random() * 2 - 1;
      const speedY = Math.random() * 2 - 1;

      fireflies.current.push({x, y, radius, alpha, speedX, speedY});
    };

    const drawFireflies = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      fireflies.current.forEach((firefly) => {
        ctx.beginPath();
        ctx.arc(firefly.x, firefly.y, firefly.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${firefly.alpha})`;
        ctx.fill();
        ctx.closePath();

        firefly.alpha -= 0.01;
        if (firefly.alpha <= 0) {
          firefly.alpha = 1;
        }

        firefly.x += firefly.speedX;
        firefly.y += firefly.speedY;

        if (firefly.x > canvas.width) {
          firefly.x = 0;
        }
        if (firefly.x < 0) {
          firefly.x = canvas.width;
        }
        if (firefly.y > canvas.height) {
          firefly.y = 0;
        }
        if (firefly.y < 0) {
          firefly.y = canvas.height;
        }
      });

      requestAnimationFrame(drawFireflies);
    };

    const animateFireflies = () => {
      for (let i = 0; i < numFireflies; i++) {
        createFirefly();
      }
      drawFireflies();
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animateFireflies();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [numFireflies]);

  return (
    <canvas ref={canvasRef} style={{position: "absolute", top: 0, left: 0}} />
  );
};

export default FireflyBackground;
