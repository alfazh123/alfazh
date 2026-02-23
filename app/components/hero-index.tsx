import { useEffect, useRef, useState } from "react";

export default function HeroIndex() {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    
      const canvasRef = useRef<HTMLCanvasElement>(null);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
        }, 60000);
    
        return () => clearInterval(interval);
      }, [])
    
      useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
    
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
    
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    
        canvas.style.backgroundColor = '#f3f4f600';
    
        const squareSize = 20;
        let mouseX = -1000;
        let mouseY = -1000;
    
        const handleMouseMove = (e: MouseEvent) => {
          const rect = canvas.getBoundingClientRect();
          mouseX = e.clientX - rect.left;
          mouseY = e.clientY - rect.top;
        };
    
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
    
          for (let y = 0; y < canvas.height; y += squareSize) {
            for (let x = 0; x < canvas.width; x += squareSize) {
              if ((x / squareSize + y / squareSize) % 2 === 0) {
                continue;
              } else {
                const centerX = x + squareSize / 2;
                const centerY = y + squareSize / 2;
                const distance = Math.hypot(centerX - mouseX, centerY - mouseY);
                const repelDistance = 100;
                const radius = squareSize / 4;
    
                let offsetX = 0;
                let offsetY = 0;
                if (distance < repelDistance && distance > 0) {
                  const angle = Math.atan2(centerY - mouseY, centerX - mouseX);
                  offsetX = Math.cos(angle) * (repelDistance - distance) * 0.3;
                  offsetY = Math.sin(angle) * (repelDistance - distance) * 0.3;
                }
    
                ctx.fillStyle = '#d1d5db';
                ctx.beginPath();
                ctx.arc(centerX + offsetX, centerY + offsetY, radius, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
          requestAnimationFrame(animate);
        };
    
        canvas.addEventListener('mousemove', handleMouseMove);
        animate();
    
        return () => {
          canvas.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

    return (
			<div className={`h-screen relative gap-4 overflow-clip`}>
				<div className="h-full flex flex-col justify-center py-8">
					<div className="flex flex-col z-50 bg-slate-50 w-fit">
						<div className="text-8xl font-bold">Ahmd Alfazh</div>
						<div>
							I'm a FrontEnd Developer Experience in React, NextJs, and Tailwind
							CSS.
						</div>
					</div>
				</div>
				<div>
					<canvas
						ref={canvasRef}
						className=" absolute top-0 left-0 w-full h-full mask-b-from-0% mask-r-from-10%"
					/>
				</div>
			</div>
		);
}