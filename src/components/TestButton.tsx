import React from 'react';

export default function TestButton() {
  const [clicked, setClicked] = React.useState(false);
  return (
    <button onClick={() => setClicked(true)} style={{padding: '0.5em 1em', fontSize: '1rem'}}>
      {clicked ? 'Clicked!' : 'Click Me'}
    </button>
  );
}
