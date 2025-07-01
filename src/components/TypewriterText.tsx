
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  showCursor?: boolean;
  cursorChar?: string;
  startDelay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 80, 
  className = "",
  onComplete,
  showCursor = true,
  cursorChar = "|",
  startDelay = 0
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Start delay effect
  useEffect(() => {
    if (startDelay > 0) {
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, startDelay);
      return () => clearTimeout(startTimeout);
    } else {
      setHasStarted(true);
    }
  }, [startDelay]);

  // Typewriter effect
  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isCompleted) {
      setIsCompleted(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [currentIndex, text, speed, onComplete, isCompleted, hasStarted]);

  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsCompleted(false);
    setHasStarted(startDelay === 0);
  }, [text, startDelay]);

  return (
    <span className={`${className} relative inline-block`}>
      <span className="typewriter-character">
        {displayText}
      </span>
      {showCursor && (
        <span 
          className={`inline-block ml-1 ${isCompleted ? 'animate-pulse' : ''}`}
          style={{
            animation: isCompleted ? 'pulse 1.5s infinite' : 'cursorBlink 1s infinite'
          }}
        >
          {cursorChar}
        </span>
      )}
    </span>
  );
};

export default TypewriterText;
