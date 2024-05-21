import React from 'react';
import RMGHeader from './components/RMGHeader';
import RMGText from './components/RMGText';
import RMGInput from './components/RMGInput';
import RMGImage from './components/RMGImage';
import RMGButton from './components/RMGButton';



const Main: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="container mx-auto p-4">
      <RMGHeader title="Welcome to React Modern Components" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <RMGText text="This is an example of using Tailwind CSS with React components." />
          <RMGInput value="" onChange={handleChange} />
          <RMGButton title="Click me" onClick={handleClick} />
        </div>
        <div className="flex justify-center items-center">
          <RMGImage src="https://via.placeholder.com/500" alt="Placeholder Image" />
        </div>
      </div>
    </div>
  );
};

export default Main;

