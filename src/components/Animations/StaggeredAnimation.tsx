import React from 'react';
import FadeIn from './FadeIn';

interface StaggeredAnimationProps {
  children: React.ReactNode;
  baseDelay?: number;
  staggerDelay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  baseDelay = 0,
  staggerDelay = 100,
  duration = 600,
  direction = 'up',
  className = ''
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <FadeIn
              key={index}
              delay={baseDelay + (index * staggerDelay)}
              duration={duration}
              direction={direction}
            >
              {child}
            </FadeIn>
          );
        }
        return child;
      })}
    </div>
  );
};

export default StaggeredAnimation;