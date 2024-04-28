import { useState } from 'react';

export function BtnFull() {
  const [full, setFull] = useState(false);

  function fullScreen() {
    if (full) {
      document.exitFullscreen();
      setFull(false);
    } else {
      document.documentElement.requestFullscreen();
      setFull(true);
    }
  }

  return (
    <button onClick={() => fullScreen()}>full</button>
  );
}