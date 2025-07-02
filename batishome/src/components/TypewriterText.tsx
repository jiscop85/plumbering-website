
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  startDelay?: number;
  showCursor?: boolean;
  cursorChar?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  className = '',
  startDelay = 0,
  showCursor = false,
  cursorChar = '|'
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursorState, setShowCursorState] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      }
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [currentIndex, text, speed, startDelay]);

  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowCursorState(prev => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [showCursor]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (showCursorState || currentIndex < text.length) && (
        <span className="animate-pulse">{cursorChar}</span>
      )}
    </span>
  );
};

export default TypewriterText;
