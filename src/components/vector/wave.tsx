import React from 'react';

export interface WaveProps {
  className?: string; // wrapper classes (controls height/spacing)
  gradientId?: string; // unique id for the linearGradient (useful when multiple waves exist)
  style?: React.CSSProperties;
}

/**
 * Reusable Wave component.
 * - Default sizes match previous implementation.
 * - Pass className to change height (e.g. "h-24 md:h-36") or spacing.
 */
export const Wave: React.FC<WaveProps> = ({
  className = 'relative -mt-6 h-36 md:h-48 lg:h-72',
  gradientId = 'waveGrad',
  style,
}) => {
  return (
    <div className={className} style={style}>
      <svg
        className='absolute top-0 left-0 w-full h-[1440/563 * 100%]'
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width={1440}
        height="563" 
        viewBox="0 0 1440 563"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#eaf4ff" />
            <stop offset="100%" stopColor="#d9ecff" />
          </linearGradient>
        </defs>
<path d="M1127.51 137.461C1371.34 129.315 1440 57.2426 1440 57.2426V563H0V143.097C0 143.097 250.736 -65.4453 577.065 20.9776C903.394 107.401 883.679 145.607 1127.51 137.461Z" fill="#E6EFFF"/>
      </svg>
    </div>
  );
};

export default Wave;