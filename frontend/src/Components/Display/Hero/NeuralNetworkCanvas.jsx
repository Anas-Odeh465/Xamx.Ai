import { useEffect, useRef } from "react";

export default function NeuralNetworkCanvas({
  particleCount = 80,
  speed = 0.5,
  lineDistance = 120,
  particleColor = "rgba(0,0,0,0.3)",
  lineColor = "0,0,0",
}) {

  const canvasRef = useRef(null);

useEffect(() => {

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  const particles = [];

  function createParticles() {

    particles.length = 0;

    for (let i = 0; i < particleCount; i++) {

      particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,

      });

    }
  }

  function resizeCanvas() {

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    createParticles();
  }

  resizeCanvas();

  window.addEventListener("resize", resizeCanvas);

  function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();

      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);

      ctx.fillStyle = particleColor;

      ctx.fill();
    });

    for (let a = 0; a < particles.length; a++) {

      for (let b = a; b < particles.length; b++) {

        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < lineDistance) {

          ctx.beginPath();

          ctx.moveTo(
            particles[a].x,
            particles[a].y
          );

          ctx.lineTo(
            particles[b].x,
            particles[b].y
          );

          ctx.strokeStyle = `rgba(${lineColor}, ${
            1 - distance / lineDistance
          })`;

          ctx.lineWidth = 0.5;

          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  return () => {
    window.removeEventListener(
      "resize",
      resizeCanvas
    );
  };

}, [lineColor, lineDistance, particleColor, particleCount, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 bottom-0 w-full h-full z-0"
    />
  );
}