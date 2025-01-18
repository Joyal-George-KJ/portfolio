import React, { useEffect, useRef } from "react";

function Effects(props) {
    const ref = useRef();
    const stars = useRef([]);

    const initializeStars = (count, canvasWidth, canvasHeight) => {
        const newStars = [];
        for (let i = 0; i < count; i++) {
            newStars.push({
                x: Math.random() * canvasWidth,
                y: Math.random() * canvasHeight,
                radius: Math.random() * 2 + 1, // Random size
                isShooting: false, // By default, stars are static
                dx: 0, // Default speed for static stars
                dy: 0,
            });
        }
        return newStars;
    };

    const triggerShootingStars = () => {
        // Reset all stars to static
        stars.current.forEach((star) => {
            star.isShooting = false;
            star.dx = 0;
            star.dy = 0;
        });

        // Randomly pick 2-5 stars to shoot
        const shootingStars = stars.current.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 4) + 2);
        shootingStars.forEach((star) => {
            star.isShooting = true;
            star.dx = Math.random() * 2 + 2; // Random horizontal speed
            star.dy = Math.random() * 2 - 1; // Random vertical speed
        });
    };

    const animate = (context, canvasWidth, canvasHeight) => {
        context.clearRect(0, 0, canvasWidth, canvasHeight);

        stars.current.forEach((star) => {
            if (star.isShooting) {
                // Update position for shooting stars
                star.x += (star.dx - 2);
                star.y += (star.dy - 2);

                // Reset shooting star if it goes off-screen
                if (star.x > canvasWidth || star.y > canvasHeight || star.y < 0) {
                    star.x = Math.random() * canvasWidth;
                    star.y = Math.random() * canvasHeight;
                    star.isShooting = false;
                }
            }

            star.radius = Math.random() * 2 > star.radius ? star.radius + 0.1 : star.radius - 0.1; // Randomly shrink stars

            // Draw the star
            context.beginPath();
            context.fillStyle = star.isShooting ? "rgba(255, 255, 255, 1)" : "white"; // Bright for shooting stars
            context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            context.fill();
        });

        // Request the next animation frame
        requestAnimationFrame(() => animate(context, canvasWidth, canvasHeight));
    };

    useEffect(() => {
        const canvas = ref.current;
        const context = canvas.getContext("2d");

        // Set canvas dimensions
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Initialize stars
        stars.current = initializeStars(100, canvas.width, canvas.height);

        // Trigger initial shooting stars
        triggerShootingStars();

        // Start the animation
        animate(context, canvas.width, canvas.height);

        // Set an interval to periodically trigger shooting stars
        const interval = setInterval(() => {
            triggerShootingStars();
        }, 2000); // Every 2 seconds, trigger new shooting stars

        // Cleanup function
        return () => {
            clearInterval(interval);
            stars.current = [];
        };
    }, []);

    return <canvas className="fixed top-0 bottom-0 right-0 left-0 bg-neutral-800 -z-30" ref={ref} {...props}></canvas>;
}

export default Effects;
