import React, { useState, useEffect } from 'react';
import { ArrowUp } from "iconoir-react";

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);
    
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    useEffect(() => {
        const handleScroll = () => {
            toggleVisible();
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to ensure this effect runs only once
    
    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`fixed bottom-2 right-2 md:bottom-4 md:right-4 md:w-16 md:h-16 w-12 h-12 flex flex-row items-center justify-center bg-matrixPurple rounded-full text-white md:text-2xl transition-all ease-in-out duration-300 ${
                    visible ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-full'
                }`}
            >
                <ArrowUp strokeWidth={4} />
            </button>
        </div>
    );
}

export default ScrollToTopButton;
