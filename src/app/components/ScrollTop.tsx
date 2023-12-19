"use client"
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 right-3">
      <button
        onClick={scrollToTop}
        className={`bg-[#706f6f5b] text-white hover:bg-[#af272f] rounded-full w-7 h-7 flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <MdOutlineKeyboardArrowUp size={20} />
      </button>
    </div>
  );
};

export default ScrollTop;
