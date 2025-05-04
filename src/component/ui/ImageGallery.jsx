import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ImageGallery = ({ images = [] }) => {
    const fallbackImage = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
    const imagesToDisplay = images.length > 0 ? images : [fallbackImage];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const timerRef = useRef(null);

    // Auto-play: change image every 2s
    useEffect(() => {
        startAutoPlay();
        return stopAutoPlay; // Clear timer on unmount
    }, [currentImageIndex]);

    const startAutoPlay = () => {
        stopAutoPlay();
        timerRef.current = setInterval(() => {
            handleNextImage();
        }, 2000);
    };

    const stopAutoPlay = () => {
        if (timerRef.current) clearInterval(timerRef.current);
    };

    const handleNextImage = () => {
        setDirection(1);
        setCurrentImageIndex((prev) => (prev + 1) % imagesToDisplay.length);
    };

    const handlePreviousImage = () => {
        setDirection(-1);
        setCurrentImageIndex((prev) =>
            (prev - 1 + imagesToDisplay.length) % imagesToDisplay.length
        );
    };

    // Swipe Handlers
    const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
        handleSwipe();
    };

    const handleSwipe = () => {
        if (touchStart - touchEnd > 50) {
            // Swipe right → left → image comes from right
            setDirection(-1);
            handleNext();
        } else if (touchEnd - touchStart > 50) {
            // Swipe left → right → image comes from left
            setDirection(1);
            handlePrev();
        }
    };

    // Animation Variants
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        },
        exit: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            },
        }),
    };

    return (
        <div
            className="relative w-full md:flex md:items-center md:justify-center md:h-[450px] h-[300px]  "
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <AnimatePresence custom={direction}>
                <motion.img
                    key={currentImageIndex}
                    src={
                        imagesToDisplay[currentImageIndex].startsWith('http')
                            ? imagesToDisplay[currentImageIndex]
                            : fallbackImage
                    }
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute md:w-[900px] w-full md:h-[400px] h-[300px] object-cover"
                />
            </AnimatePresence>

            {/* Left Arrow */}
            <div
                className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-red-400  drop-shadow-lg drop-shadow-red-400 text-4xl z-20"
                onClick={() => {
                    stopAutoPlay();
                    handlePreviousImage();
                }}
            >
                &#x276E;
            </div>

            {/* Right Arrow */}
            <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-red-400  drop-shadow-lg drop-shadow-red-400 text-4xl z-20"
                onClick={() => {
                    stopAutoPlay();
                    handleNextImage();
                }}
            >
                &#x276F;
            </div>
        </div>
    );
};

export default ImageGallery;
