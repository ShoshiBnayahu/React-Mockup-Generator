// src/components/RMGText.tsx
import React from 'react';

interface RMGTextProps {
  text: string;
}

const RMGText: React.FC<RMGTextProps> = ({ text }) => {
  return <p className="text-gray-800 text-lg mb-4">{text}</p>;
};

export default RMGText;
