"use client";

import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, classes }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  // Typing logic goes here

  return <div className={`${classes}`}>{currentText}</div>;
};

export default Typewriter;