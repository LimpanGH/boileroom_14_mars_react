import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [message, setMessage] = useState('');

  // Callback function to handle data from the child component
  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent sendDataToParent={handleDataFromChild} />
      <p>Message from Child: {message}</p>
    </div>
  );
}

export default ParentComponent;
