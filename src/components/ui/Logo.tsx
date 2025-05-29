import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`logo-animation flex items-center ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <circle cx="20" cy="20" r="20" fill="#3e9448" />
        <path 
          d="M30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20C10 14.4772 14.4772 10 20 10" 
          stroke="#daa11f" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <path 
          d="M23 15C23 17.7614 25.2386 20 28 20" 
          stroke="#daa11f" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="2" fill="#FFFFFF" />
      </svg>
      
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-primary-600">Triloki</span>
          <span className="text-secondary-500">Global</span>
        </h1>
        <p className="text-xs font-medium text-neutral-600">Premium Agricultural Exports</p>
      </div>
    </div>
  );
};

export default Logo;