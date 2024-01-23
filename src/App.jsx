import { useState, useEffect } from 'react';

const Button = ({ color, setColor, setAutoChange }) => {
  const textColor = ['yellow', 'pink'].includes(color) ? 'black' : 'white';
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <button
      onClick={() => {
        setColor(color);
        setAutoChange(false);
      }}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg transition-all duration-500"
      style={{ backgroundColor: color, color: textColor }}
    >
      {capitalizeFirstLetter(color)}
    </button>
  );
};

function App() {
  const [color, setColor] = useState('red');
  const colors = ['red', 'pink', 'blue', 'green', 'grey', 'purple', 'yellow', 'black', 'violet'];
  const [autoChange, setAutoChange] = useState(true); // Added state for auto-change

  useEffect(() => {
    let intervalId;

    // Start auto-changing color when autoChange is true
    if (autoChange) {
      intervalId = setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
      }, 1000); // Change color every 1/2 seconds
    }

    // Clear interval when component is unmounted or autoChange is false
    return () => clearInterval(intervalId);
  }, [autoChange, colors]);

  const handleStopClick = () => {
    setAutoChange(false);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((color, index) => (
            <Button key={index} color={color} setColor={setColor} setAutoChange={setAutoChange} />
          ))}

          <button
            onClick={handleStopClick}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700 transition-all duration-500"
          >
            Stop
          </button>
          <button
            onClick={() => setAutoChange(true)}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500 transition-all duration-500"
          >
            Play Random
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
