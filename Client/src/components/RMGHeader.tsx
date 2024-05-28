// src/components/RMGHeader.tsx
import React from 'react';

interface RMGHeaderProps {
  title: string;
}

const RMGHeader: React.FC<RMGHeaderProps> = ({ title }) => {
  return (
    <header className="bg-blue-200 text-blue-900 py-4 px-8 mb-4 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
};

export default RMGHeader;
