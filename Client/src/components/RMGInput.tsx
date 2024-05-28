// src/components/RMGInput.tsx
import React from 'react';

interface RMGInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RMGInput: React.FC<RMGInputProps> = ({ value, onChange }) => {
  return <input className="border border-gray-300 rounded-lg px-4 py-2 mb-4" type="text" value={value} onChange={onChange} />;
};

export default RMGInput;
