import React, { useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  const showTooltip = () => setIsTooltipVisible(true);
  const hideTooltip = () => setIsTooltipVisible(false);
  
  return (
    <div className="fixed left-6 bottom-6 z-40">
      <a
        href="https://wa.me/919876543210?text=Hello%20Triloki%20Global!%20I'm%20interested%20in%20your%20products.%20Can%20you%20provide%20more%20information?"
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
          <svg width="28" height="28" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 43.841C90 68.066 70.167 87.681 45.674 87.681C37.857 87.681 30.518 85.638 24.141 82.096L0 90L8.162 66.903C4.125 60.364 1.898 52.414 1.898 43.842C1.898 19.615 21.732 0 45.673 0C70.166 0 90 19.615 90 43.841ZM45.674 6.983C25.564 6.983 9.12 23.216 9.12 43.841C9.12 52.202 12.035 59.829 16.917 65.615L12.164 79.138L26.272 74.485C31.823 78.679 38.454 81.104 45.673 81.104C65.782 81.104 82.227 64.871 82.227 44.245C82.227 23.619 65.782 6.983 45.674 6.983ZM68.539 53.844C67.965 52.884 66.518 52.312 64.486 51.168C62.453 50.025 57.384 47.556 55.553 46.787C53.723 46.019 52.278 45.634 50.83 47.249C49.383 48.864 47.361 51.312 46.109 52.751C44.857 54.189 43.605 54.383 41.573 53.24C39.541 52.096 36.109 50.801 32.123 47.267C29.001 44.521 26.868 41.068 25.616 39.454C24.365 37.839 25.49 36.725 26.566 35.709C27.53 34.804 28.715 33.362 29.774 32.117C30.834 30.872 31.219 30.001 31.988 28.5C32.757 26.999 32.372 25.755 31.794 24.61C31.219 23.467 29.18 18.444 27.42 14.679C25.744 11.072 24.02 11.859 22.70 11.845C21.432 11.829 19.984 11.811 18.537 11.811C17.089 11.811 14.666 12.387 12.836 14.002C11.006 15.616 8.33 18.086 8.33 23.109C8.33 28.131 11.881 32.964 12.555 34.465C13.227 35.967 26.867 58.074 49.173 67.362C53.755 69.293 57.314 70.428 60.071 71.254C64.502 72.606 68.539 72.365 71.658 71.771C75.149 71.103 79.419 68.956 81.177 64.773C82.936 60.591 82.936 57.023 82.361 55.989C81.786 54.956 80.339 54.38 78.306 53.235L68.539 53.844Z" fill="white"/>
          </svg>
          {isTooltipVisible && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-800 text-white text-sm rounded-lg whitespace-nowrap shadow-lg">
              Chat with us on WhatsApp
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-neutral-800"></div>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default WhatsAppButton;