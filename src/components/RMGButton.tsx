// src/components/RMGButton.tsx
import React from 'react';

interface RMGButtonProps {
  title: string;
  onClick?: () => void;
}

const RMGButton: React.FC<RMGButtonProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
    >
      {title}
    </button>
  );
};

export default RMGButton;
