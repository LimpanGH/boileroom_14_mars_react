import React from 'react';

function ChildComponent({ sendDataToParent }) {
  const handleClick = () => {
    const data = 'Hello from Child!';
    sendDataToParent(data); // Call the callback function passed from the parent
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
