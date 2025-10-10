import { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'fade-in';
  delay?: number;
  threshold?: number;
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        isVisible 
          ? `animate-${animation}` 
          : 'opacity-0 translate-y-8'
      }`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationFillMode: 'backwards'
      }}
    >
      {children}
    </div>
  );
}

